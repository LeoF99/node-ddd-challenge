import { Router } from 'express';

import CityController from '../../application/controllers/city.controller';
import ClientController from '../../application/controllers/client.controller';
import CityControllerFactory from '../factories/city.controller.factory';
import ClientControllerFactory from '../factories/client.controller.factory';

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
    this.router.post('/cities', this.cityController.create);
    this.router.get('/cities/name', this.cityController.findByName);
    this.router.get('/cities/state', this.cityController.findByState);

    this.router.post('/clients', this.clientController.create);
    this.router.get('/clients/name', this.clientController.findByName);
    this.router.get('/clients', this.clientController.findById);
    this.router.delete('/clients', this.clientController.remove);
    this.router.patch('/clients/:id', this.clientController.updateName);
  }
}

export default Routes;
