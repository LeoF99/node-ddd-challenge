import express, { Application, RequestHandler, Router } from 'express';
import IDatabase from './infrastructure/database/database.interface';

class App {
  public app: Application;

  public port: number;

  private readonly database: IDatabase;

  constructor(appInit: {
    port: number;
    middleWares: Array<RequestHandler>;
    router: Router;
    database: IDatabase;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.router);

    this.database = appInit.database;
  }

  private middlewares(middleWares: Array<RequestHandler>) {
    middleWares.forEach((middleWare) => this.app.use(middleWare));
  }

  private routes(router: Router) {
    this.app.use(router);
  }

  public async databaseSetup() {
    await this.database.start();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port} 🚀`);
    });
  }
}

export default App;
