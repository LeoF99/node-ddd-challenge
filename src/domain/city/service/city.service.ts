import ICity from "../entity/interface/city.entity.interface";
import City from "../entity/city.entity";
import ICityRepository from "../repository/city.repository.interface";

class CityService {
  private readonly cityRepository: ICityRepository;

  constructor(cityRepository: ICityRepository) {
    this.cityRepository = cityRepository;
  }

  create = async (city: ICity) => await this.cityRepository.create(city);

  findByName = async (name: string) => await this.cityRepository.findOne({ name });

  findByState = async (state: string) => await this.cityRepository.findOne({ state });
}

export default CityService;
