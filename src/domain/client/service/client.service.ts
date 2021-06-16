import IClient from '../entity/interface/client.entity.interface';
import IClientRepository from '../repository/client.repository.interface';
import ClientNotFound from '../exceptions/clientNotFound.exception';
import ICreateClientDTO from './createClientDTO.interface';
import ICityRepository from '../../city/repository/city.repository.interface';

class ClientService {
  private readonly clientRepository: IClientRepository;
  private readonly cityRepository: ICityRepository;

  constructor(clientRepository: IClientRepository, cityRepository: ICityRepository) {
    this.clientRepository = clientRepository;
    this.cityRepository = cityRepository;
  }

  create = async (clientData: ICreateClientDTO) => {
    const city = await this.cityRepository.findOne({ id: clientData.cityId });

    if(!city) throw new Error('Cidade não encontrada');

    const client = await this.clientRepository.create({
      name: clientData.name,
      gender: clientData.gender,
      birthdate: clientData.birthdate,
      age: clientData.age,
      city: city,
    });

    return client;
  }

  findByName = async (name: string) => {
    const client = await this.clientRepository.findByName(name);

    if (!client) throw new ClientNotFound();

    return client;
  };

  findById = async (id: number) => {
    const client = await this.clientRepository.findById(id);

    if (!client) throw new ClientNotFound();

    return client;
  };

  remove = async (id: number) => {
    const removedClient = await this.clientRepository.remove(id);

    if (!removedClient) throw new ClientNotFound();

    return removedClient;
  };

  updateName = async (id: number, name: string) => {
    const updatedClient = await this.clientRepository.updateName(id, name);

    if (!updatedClient) throw new ClientNotFound();

    return updatedClient;
  };
}

export default ClientService;
