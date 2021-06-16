import IClient from '../entity/interface/client.entity.interface';
import IClientRepository from '../repository/client.repository.interface';
import { NotFound } from '../../exceptions/business.exception';

const CLIENT_NOT_FOUND_MESSAGE = 'Client not found!';

class ClientService {
  private readonly clientRepository: IClientRepository;

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository;
  }

  create = async (clientData: IClient) => {
    const client = await this.clientRepository.create({
      name: clientData.name,
      gender: clientData.gender,
      birthdate: clientData.birthdate,
      age: clientData.age,
      cityId: clientData.cityId,
    });

    return client;
  };

  findByName = async (name: string) => {
    const client = await this.clientRepository.findByName(name);

    if (!client) throw new NotFound(CLIENT_NOT_FOUND_MESSAGE);

    return client;
  };

  findById = async (id: number) => {
    const client = await this.clientRepository.findById(id);

    if (!client) throw new NotFound(CLIENT_NOT_FOUND_MESSAGE);

    return client;
  };

  remove = async (id: number) => {
    const removedClient = await this.clientRepository.remove(id);

    if (!removedClient) throw new NotFound(CLIENT_NOT_FOUND_MESSAGE);

    return removedClient;
  };

  updateName = async (id: number, name: string) => {
    const updatedClient = await this.clientRepository.updateName(id, name);

    if (!updatedClient) throw new NotFound(CLIENT_NOT_FOUND_MESSAGE);

    return updatedClient;
  };
}

export default ClientService;
