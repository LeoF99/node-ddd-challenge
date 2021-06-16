import { getConnection, Like } from 'typeorm';

import ClientEntity from '../../../../domain/client/entity/client.entity';
import IClientEntity from '../../../../domain/client/entity/interface/client.entity.interface';
import IClientRepository from '../../../../domain/client/repository/client.repository.interface';
import ClientModel from '../../../database/mySql/models/client.model';

class ClientRepository implements IClientRepository {
  public async create(clientData: IClientEntity): Promise<ClientEntity> {
    const clientModel = ClientModel.toModel(clientData);

    const createdCity = await getConnection()
      .getRepository(ClientModel)
      .save(clientModel);

    return createdCity.toEntity();
  }

  public async findByName(name: string): Promise<ClientEntity | undefined> {
    const query = {
      name: Like(`%${name}%`),
    };

    return this.findOne(query);
  }

  public async findById(id: number): Promise<ClientEntity | undefined> {
    const client = await getConnection()
      .getRepository(ClientModel)
      .findOne(id);

    return client?.toEntity();
  }

  public async remove(id: number): Promise<ClientEntity | undefined> {
    const repo = getConnection().getRepository(ClientModel);

    const client = await repo.findOne(id);

    if (!client) return client;

    const deletedClient = await repo.remove(client);

    return deletedClient.toEntity();
  }

  public async updateName(id: number, name: string): Promise<ClientEntity | undefined> {
    const repo = getConnection().getRepository(ClientModel);

    const update = await repo.update(id, { name } as Partial<ClientModel>);

    if (!update.affected) return undefined;

    const client = await repo.findOne(id);

    return client?.toEntity();
  }

  public async findOne(where: Object): Promise<ClientEntity | undefined> {
    const client = await getConnection()
      .getRepository(ClientModel)
      .findOne(where);

    return client?.toEntity();
  }
}

export default ClientRepository;
