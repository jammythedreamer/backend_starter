import {
  ClientError,
  ServerError,
} from './errors';

export function error(err: Error | ClientError | ServerError) {
  if (err) {
    throw err;
  }
}

export function clientError(name: number, message: string = '') {
  const err = new ClientError(message);
  err.name = name.toString();
  return err;
}

export function serverError(name: number, message: string = '') {
  const err = new ServerError(message);
  err.name = name.toString();
  return err;
}
