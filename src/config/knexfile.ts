import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection:  {
      database: 'jopo_db',
      user: 'postgres',
      password: 'root',
      host: '127.0.0.1',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/migrations',
      tableName: 'knex_migrations',
      extension: 'ts',
      disableMigrationsListValidation: true,
      loadExtensions: [`.ts`],
    },
    seeds: {
      directory: __dirname + '/src/seeds/development',
      extension: 'ts',
    },
  }
};

module.exports = config;
