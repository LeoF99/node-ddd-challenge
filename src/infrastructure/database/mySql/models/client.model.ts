import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import IClientEntity, { Gender } from '../../../../domain/client/entity/interface/client.entity.interface';
import ClientEntity from '../../../../domain/client/entity/client.entity';
import City from './city.model';
import ICity from '../../../../domain/city/entity/interface/city.entity.interface';

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

  @OneToOne(() => City)
  @JoinColumn()
  private readonly city: City;

  constructor(
    name: string,
    gender: Gender,
    birthdate: Date,
    age: number,
    city: City
  ) {
    this.name = name;
    this.gender = gender;
    this.birthdate = birthdate;
    this.age = age;
    this.city = city;
  }

  toEntity(): ClientEntity {
    return new ClientEntity({
      id: this?.id,
      name: this.name,
      gender: this.gender,
      birthdate: this.birthdate,
      age: this.age,
      city: this.city.toEntity()
    })
  }

  static toModel(entity: IClientEntity): Client {
    return new Client(
      entity.name,
      entity.gender,
      entity.birthdate,
      entity.age,
      City.toModel(<ICity>{...entity.city})
    );
  }
}

export default Client;
