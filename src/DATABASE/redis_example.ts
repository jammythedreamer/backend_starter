import * as redis from './redis';
import { v4 as uuidv4 } from 'uuid';
import { TPR } from '../common/interface';
import * as assert from '../common/assert';
import api_error from '../common/api_error';

function getExampleTokenKey(id: number) {
  return `example_token::${id}`;
}

export async function setExampleToken(id: number, expireTime: number): TPR<string> {
  const key = getExampleTokenKey(id);
  const token = uuidv4();
  const [, err] = await redis.setDataWithExpiry(key, token, expireTime);
  if (err) {
    const error = assert.serverError(api_error.REDIS_ERROR, err.message);
    return [null, error];
  }
  return [token, null];
}

export async function getExampleToken(id: number): TPR<string> {
  const key = getExampleTokenKey(id);
  const [result, err] = await redis.getData(key);
  if (err) {
    const error = assert.serverError(api_error.REDIS_ERROR, err.message);
    return [null, error];
  }
  return [result, null];
}

export async function removeExampleToken(id: number): TPR<void> {
  const key = getExampleTokenKey(id);
  const [, err] = await redis.removeData(key);
  if (err) {
    const error = assert.serverError(api_error.REDIS_ERROR, err.message);
    return [null, error];
  }
  return [null, null];
}
