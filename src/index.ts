import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import cors from 'cors';
import { typeDefs, resolvers } from './graphql';
import AppDataSource from './orm/config/ormconfig';
import config from './config/config';


const { NODE_ENV, PORT, DOMAIN_URL } = config;

const connectServer = async () => {
    const app = express();

    const httpServer = NODE_ENV !== 'production' ? http.createServer(app) : https.createServer({
        key: fs.readFileSync(path.join(__dirname, './keys/ssl.key')),
        cert: fs.readFileSync(path.join(__dirname, './keys/ssl.cert'))
    }, app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(server),
    );

    await AppDataSource.initialize();
    console.log("Data Source has been initialized!")

    await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at ${DOMAIN_URL}/graphql`);
}

connectServer()