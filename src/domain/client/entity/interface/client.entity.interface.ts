import City from '../../../city/entity/city.entity';

export enum Gender {
  male = 'MALE',
  female = 'FEMALE',
}

interface IClient {
  id?: number;

  name: string;

  gender: Gender;

  birthdate: Date;

  age: number;

  city: City;
}

export default IClient;
