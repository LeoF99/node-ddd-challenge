import dotenv from 'dotenv';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DATABASE } = process.env;

const mySqlConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: String(DB_HOST),
  port: Number(DB_PORT),
  username: String(DB_USERNAME),
  password: String(DB_PASSWORD),
  database: String(DATABASE),
  synchronize: true,
  logging: false,
  entities: ['src/infrastructure/database/mySql/models/**/*.ts'],
  migrations: ['src/infrastructure/database/mySql/migration/**/*.ts'],
};

export default mySqlConfig;
