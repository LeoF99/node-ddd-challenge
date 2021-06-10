import { createConnection, Connection } from 'typeorm';

import IDatabase from '../database.interface';
import mySqlConfig from './config';

class Database implements IDatabase {
  private DB_CONNECTION: Connection | undefined;

  public async start() {
    try {
      if (!this.DB_CONNECTION) {
        this.DB_CONNECTION = await createConnection(mySqlConfig);
      }
    } catch (error) {

    }
  }

  public async close() {
    this.DB_CONNECTION?.close();
  }
}

export default Database;
