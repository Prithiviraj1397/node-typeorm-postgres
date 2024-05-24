import path from 'path';
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
    NODE_ENV: process.env.NODE_ENV,
    DOMAIN_URL: process.env.DOMAIN_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT,
    PG_HOST: process.env.PG_HOST,
    PG_PORT: process.env.PG_PORT,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    JWT: {
        SECRET: process.env.JWT_SECRET,
        EXPIRES_IN: process.env.JWT_EXPIRATION
    }
}

export default config;