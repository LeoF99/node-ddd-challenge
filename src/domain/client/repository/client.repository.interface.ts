import IClient from "../entity/interface/client.entity.interface";
import Client from "../entity/client.entity";

interface IClientRepository {
  create(clientData: IClient): Promise<Client>;

  findByName(name: string): Promise<Client | undefined>;

  findById(id: number): Promise<Client | undefined>;

  remove(id: number): Promise<Client | undefined>;

  updateName(id: number, name: string): Promise<Client | undefined>;

  findOne(where: Object): Promise<Client | undefined>;
}

export default IClientRepository;
