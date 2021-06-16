import IClient, { Gender } from './interface/client.entity.interface';
import City from '../../city/entity/city.entity';

class Client {
  private readonly id?: number;

  private readonly name: string;

  private readonly gender: Gender;

  private readonly birthdate: Date;

  private readonly age: number;

  private readonly city: City;

  constructor(client: IClient) {
    this.id = client.id;
    this.name = client.name;
    this.gender = client.gender;
    this.birthdate = client.birthdate;
    this.age = client.age;
    this.city = client.city;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getGender(): Gender {
    return this.gender;
  }

  public getBirthdate() : Date {
    return this.birthdate;
  }

  public getAge(): number {
    return this.age;
  }

  public getCity(): City {
    return this.city;
  }
}

export default Client;
