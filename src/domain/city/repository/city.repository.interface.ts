import City from '../entity/city.entity';
import ICity from '../entity/interface/city.entity.interface';

interface ICityRepository {
  create(city: ICity): Promise<City>;

  findOne(where: Object): Promise<City | undefined>;
}

export default ICityRepository;
