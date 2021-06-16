import GeneralClient from './generalClient.exception';

class ClientNotFound extends GeneralClient {
  constructor() {
    super('Client not found!');
  }

  getCode(): number {
    return 404;
  }
}

export default ClientNotFound;
