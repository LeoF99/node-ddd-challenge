import Database from '../../infrastructure/database/mySql/database';
import IDatabase from '../../infrastructure/database/database.interface';

class DatabaseFactory {
  private static instance: IDatabase;

  static getInstance(): IDatabase {
    if(!DatabaseFactory.instance) {
      DatabaseFactory.instance = new Database();
    }

    return DatabaseFactory.instance;
  }
}

export default DatabaseFactory;
