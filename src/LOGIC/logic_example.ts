import {
  IExample,
  TPR,
} from '../common/interface';
import * as db_example from '../DATABASE/db_example';
import * as redis_example from '../DATABASE/redis_example';

const TOKEN_EXPIRY = 300; // 300 sec

export async function createExample(memo: string): TPR<number> {
  const [id, err] = await db_example.create(memo);
  if (err) {
    return [null, err];
  }
  return [id, null];
}

export async function getExample(id: number): TPR<IExample> {
  const [data, err] = await db_example.get(id);
  if (err) {
    return [null, err];
  }
  return [data, null];
}

export async function setToken(id: number): TPR<string> {
  const [token, err] = await redis_example.setExampleToken(id, TOKEN_EXPIRY);
  if (err) {
    return [null, err];
  }
  return [token, null];
}

export async function getToken(id: number): TPR<string> {
  const [token, err] = await redis_example.getExampleToken(id);
  if (err) {
    return [null, err];
  }
  return [token, null];
}
