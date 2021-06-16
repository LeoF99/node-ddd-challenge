import { Router } from 'express';

import CityController from '../../application/controllers/city.controller';
import ClientController from '../../application/controllers/client.controller';
import CityControllerFactory from '../factories/city.controller.factory';
import ClientControllerFactory from '../factories/client.controller.factory';
import awaitHandler from '../../infrastructure/middlewares/awaitHandler.middleware';

class Routes {
  private readonly router: Router;

  private readonly cityController: CityController;

  private readonly clientController: ClientController;

  constructor() {
    this.router = Router();
    this.cityController = CityControllerFactory.getInstance();
    this.clientController = ClientControllerFactory.getInstance();
    this.setRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  private setRoutes(): void {
    this.router.post('/cities', awaitHandler(this.cityController.create));
    this.router.get('/cities/name', awaitHandler(this.cityController.findByName));
    this.router.get('/cities/state', awaitHandler(this.cityController.findByState));

    this.router.post('/clients', awaitHandler(this.clientController.create));
    this.router.get('/clients/name', awaitHandler(this.clientController.findByName));
    this.router.get('/clients/:id', awaitHandler(this.clientController.findById));
    this.router.delete('/clients/:id', awaitHandler(this.clientController.remove));
    this.router.patch('/clients/:id', awaitHandler(this.clientController.updateName));
  }
}

export default Routes;
