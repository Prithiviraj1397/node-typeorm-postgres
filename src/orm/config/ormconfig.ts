import "reflect-metadata";
import { DataSource } from 'typeorm';
import config from '../../config/config';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.PG_HOST,
  port: Number(config.PG_PORT),
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  synchronize: false,
  logging: false,
  migrationsRun: true,
  entities: ['src/orm/entities/**/*.ts'],
  migrations: ['src/orm/migrations/*{.ts,.js}'],
  migrationsTableName: "custom_migration_table",
});

export default AppDataSource;
