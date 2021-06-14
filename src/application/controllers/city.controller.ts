import { Request, Response} from 'express';

import CityService from '../../domain/city/service/city.service';

class CityController {
  private readonly cityService: CityService;

  constructor(cityService: CityService) {
    this.cityService = cityService;
  }

  create = async (req: Request, res: Response) => {
    const { name, state } = req.body;

    const createdCity = await this.cityService.create({ name, state });

    res.json(createdCity);
  }

  findByName = async (req: Request, res: Response) => {
    const { name } = req.query;

    const city = await this.cityService.findByName(String(name));

    res.json(city);
  }

  findByState = async (req: Request, res: Response) => {
    const { state } = req.query;

    const city = await this.cityService.findByState(String(state));

    res.json(city);
  }
}

export default CityController;
