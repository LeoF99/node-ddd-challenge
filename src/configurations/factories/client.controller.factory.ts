import ClientController from '../../application/controllers/client.controller';
import ClientService from '../../domain/client/service/client.service';
import CityRepository from '../../infrastructure/repository/typeorm/city/city.repository';
import ClientRepository from '../../infrastructure/repository/typeorm/client/client.repository';

class ClientControllerFactory {
  private static instance: ClientController;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ClientController(
        new ClientService(new ClientRepository()),
      );
    }

    return this.instance;
  }
}

export default ClientControllerFactory;
