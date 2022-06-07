import knex from './knex';
import {
  IExample,
  TPR,
} from '../common/interface';
import * as assert from '../common/assert';
import api_error from '../common/api_error';
import DB_TABLE from '../common/db_table';

export async function create(memo: string): TPR<number> {
  const data: Omit<IExample, 'id'> = {
    memo: memo,
  };
  const result = await knex(DB_TABLE.EXAMPLE)
    .insert(data)
    .catch((err) => {
      const error = assert.serverError(api_error.MYSQL_ERROR, err.message);
      assert.error(error);
    });

  return [result[0], null];
}

export async function update(id: number, updatedData: Partial<IExample>): TPR<void> {
  const result = await knex<IExample>(DB_TABLE.EXAMPLE)
    .update(updatedData)
    .where({ id })
    .catch((err) => {
      const error = assert.serverError(api_error.MYSQL_ERROR, err.message);
      assert.error(error);
    });
  return [null, null];
}

export async function get(id: number): TPR<IExample> {
  const result = await knex<IExample>(DB_TABLE.EXAMPLE)
    .where({ id })
    .first()
    .catch((err) => {
      const error = assert.serverError(api_error.MYSQL_ERROR, err.message);
      assert.error(error);
    });
  return [result as IExample, null];
}
