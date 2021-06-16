import { Router } from 'express';

import CityController from '../../application/controllers/city.controller';
import CityControllerFactory from '../factories/city.controller.factory';

class Routes {
  private readonly router: Router;

  private readonly cityController: CityController;

  constructor() {
    this.router = Router();
    this.cityController = CityControllerFactory.getInstance();
    this.setRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  private setRoutes(): void {
    this.router.post('/city', this.cityController.create);
    this.router.get('/city/name', this.cityController.findByName);
    this.router.get('/city/state', this.cityController.findByState);
  }
}

export default Routes;
