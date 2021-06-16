import { Request, Response } from 'express';

import ClientService from '../../domain/client/service/client.service';

class ClientController {
  private readonly clientService: ClientService;

  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  create = async (req: Request, res: Response) => {
    const {
      name,
      gender,
      birthdate,
      age,
      cityId,
    } = req.body;

    const createdClient = await this.clientService.create({
      name,
      gender,
      birthdate,
      age,
      cityId,
    });

    res.json(createdClient);
  };

  findByName = async (req: Request, res: Response) => {
    const { name } = req.query;

    const client = await this.clientService.findByName(String(name));

    return res.json(client);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const client = await this.clientService.findById(Number(id));

    return res.json(client);
  };

  remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const client = await this.clientService.remove(Number(id));

    return res.json(client);
  };

  updateName = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.query;

    const client = await this.clientService.updateName(Number(id), String(name));

    return res.json(client);
  };
}

export default ClientController;
