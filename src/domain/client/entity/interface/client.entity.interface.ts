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

  cityId: number;
}

export default IClient;
