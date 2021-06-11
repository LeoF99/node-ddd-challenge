import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

import ICityEntity from '../../../../domain/city/entity/interface/city.entity.interface';
import CityEntity from '../../../../domain/city/entity/city.entity';

@Entity('city')
@Index(['name', 'state'], { unique: true })
class City {
  @PrimaryGeneratedColumn()
  private readonly id?: number;

  @Column()
  private readonly name: string;

  @Column()
  private readonly state: string;

  constructor(
    name: string,
    state: string,
    id?: number
  ) {
    this.name = name;
    this.state = state;
    this.id = id;
  }

  toEntity(): CityEntity {
    return new CityEntity({
      id: this?.id,
      name: this.name,
      state: this.state,
    })
  }

  static toModel(entity: ICityEntity): City {
    return new City(
      entity.name,
      entity.state,
      entity.id
    );
  }
}

export default City;
