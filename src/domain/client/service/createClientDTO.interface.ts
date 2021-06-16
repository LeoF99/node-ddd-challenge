import { Gender } from '../entity/interface/client.entity.interface';

interface ICreateClientDTO {
  name: string;
  gender: Gender
  birthdate: Date;
  age: number;
  cityId: number;
}

export default ICreateClientDTO;
