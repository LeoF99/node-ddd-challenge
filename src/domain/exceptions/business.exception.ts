/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */
class BusinessError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    } if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

export class BadRequest extends BusinessError { }
export class NotFound extends BusinessError { }

export default BusinessError;
