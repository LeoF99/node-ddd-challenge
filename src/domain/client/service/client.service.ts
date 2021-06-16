import IClient from "../entity/interface/client.entity.interface";
import IClientRepository from "../repository/client.repository.interface";
import ClientNotFound from "../exceptions/clientNotFound.exception";

class ClientService {
  private readonly clientRepository: IClientRepository

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository;
  }

  create = async (clientData: IClient) => await this.clientRepository.create(clientData);

  findByName = async (name: string) => {
    const client = await this.clientRepository.findByName(name);

    if(!client) throw new ClientNotFound();

    return client;
  }

  findById = async (id: number) => {
    const client = await this.clientRepository.findById(id);

    if(!client) throw new ClientNotFound();

    return client;
  }

  remove = async (id: number) => {
    const removedClient = await this.clientRepository.remove(id);

    if(!removedClient) throw new ClientNotFound();

    return removedClient;
  }

  updateName = async (id: number, name: string) => {
    const updatedClient = await this.clientRepository.updateName(id, name);

    if(!updatedClient) throw new ClientNotFound();

    return updatedClient;
  }
}

export default ClientService;
