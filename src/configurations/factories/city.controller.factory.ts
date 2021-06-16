import CityController from '../../application/controllers/city.controller';
import CityService from '../../domain/city/service/city.service';
import CityRepository from '../../infrastructure/repository/typeorm/city/city.repository';

class CityControllerFactory {
  private static instance: CityController;

  public static getInstance(): CityController {
    if (!this.instance) {
      this.instance = new CityController(
        new CityService(new CityRepository()),
      );
    }

    return this.instance;
  }
}

export default CityControllerFactory;
