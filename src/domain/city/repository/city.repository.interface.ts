import City from '../entity/city.entity';
import ICity from '../entity/interface/city.entity.interface';

interface ICityRepository {
  create(city: ICity): Promise<City>;

  findOne(where: Object): Promise<City | undefined>;

  findByName(name: string): Promise<City | undefined>;

  findByState(state: string): Promise<City | undefined>;
}

export default ICityRepository;
