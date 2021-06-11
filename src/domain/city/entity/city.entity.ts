import ICity from './interface/city.entity.interface';

class City {
  private readonly id?: number;

  private readonly name: string;

  private readonly state: string;

  constructor(city: ICity) {
    this.id = city.id;
    this.name = city.name;
    this.state = city.state;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getState(): string {
    return this.state;
  }
}

export default City
