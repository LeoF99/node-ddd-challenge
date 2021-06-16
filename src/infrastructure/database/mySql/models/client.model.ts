import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

import IClientEntity, { Gender } from '../../../../domain/client/entity/interface/client.entity.interface';
import ClientEntity from '../../../../domain/client/entity/client.entity';

@Entity('client')
class Client {
  @PrimaryGeneratedColumn()
  private readonly id?: number;

  @Column()
  private readonly name: string;

  @Column()
  private readonly gender: Gender;

  @Column()
  private readonly birthdate: Date;

  @Column()
  private readonly age: number;

  @Column()
  private readonly cityId: number;

  constructor(
    name: string,
    gender: Gender,
    birthdate: Date,
    age: number,
    city: number,
  ) {
    this.name = name;
    this.gender = gender;
    this.birthdate = birthdate;
    this.age = age;
    this.cityId = city;
  }

  toEntity(): ClientEntity {
    return new ClientEntity({
      id: this?.id,
      name: this.name,
      gender: this.gender,
      birthdate: this.birthdate,
      age: this.age,
      cityId: this.cityId,
    });
  }

  static toModel(entity: IClientEntity): Client {
    return new Client(
      entity.name,
      entity.gender,
      entity.birthdate,
      entity.age,
      entity.cityId,
    );
  }
}

export default Client;
