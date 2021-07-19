import { PrismaClient } from '@prisma/client';

import IDatabase from '../database.interface';

class Database implements IDatabase {
  private readonly PRISMA_CLIENT: PrismaClient;

  constructor() {
    this.PRISMA_CLIENT = new PrismaClient();
  }

  public async start() {
    try {
      await this.PRISMA_CLIENT.$connect();

      console.log('Database (Prisma) successfully connected 🚀');
    } catch (error) {
      console.log('Error connecting to Database (Prisma) 😢');
      console.log(error.message);
    }
  }

  public async close() {
    await this.PRISMA_CLIENT.$disconnect();
  }
}

export default Database;
