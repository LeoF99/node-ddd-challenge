import { getConnection, Like } from 'typeorm';

import ICityRepository from '../../../../domain/city/repository/city.repository.interface';
import ICityEntity from '../../../../domain/city/entity/interface/city.entity.interface';
import CityEntity from '../../../../domain/city/entity/city.entity';
import CityModel from '../../../database/mySql/models/city.model';

class CityRepository implements ICityRepository {
  public async create(city: ICityEntity): Promise<CityEntity> {
    const cityModel = CityModel.toModel(city);

    const createdCity = await getConnection()
      .getRepository(CityModel)
      .save(cityModel);

    return createdCity.toEntity();
  }

  public async findByName(name: string): Promise<CityEntity | undefined> {
    const query = {
      name: Like(`%${name}%`),
    };

    return this.findOne(query);
  }

  public async findByState(state: string): Promise<CityEntity | undefined> {
    const query = {
      state: Like(`%${state}%`),
    };

    return this.findOne(query);
  }

  public async findOne(where: Object): Promise<CityEntity | undefined> {
    const city = await getConnection()
      .getRepository(CityModel)
      .findOne(where);

    return city?.toEntity();
  }
}

export default CityRepository;
