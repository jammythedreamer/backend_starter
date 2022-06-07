import api_error from '../common/api_error';
import * as logic_example from './logic_example';
import * as assert from '../common/assert';

export async function get(req) {
  const id: number = req.body.id;

  let isValid = true;
  isValid = isValid && Number.isInteger(id);
  if (!isValid) {
    assert.clientError(api_error.INVALID_PARAMETER_ERROR);
  }

  const [result, err] = await logic_example.getExample(id);
  assert.error(err);
  const data = result;

  const retValue = {
    error: api_error.OK,
    data: data,
  };
  return retValue;
}

export async function create(req) {
  const memo: string = req.body.memo;

  let isValid = true;
  isValid = isValid && memo != undefined;
  if (!isValid) {
    assert.clientError(api_error.INVALID_PARAMETER_ERROR);
  }

  const [result, err] = await logic_example.createExample(memo);
  assert.error(err);
  const data = {
    id: result,
  };

  const retValue = {
    error: api_error.OK,
    data: data,
  };
  return retValue;
}

export async function setToken(req) {
  const id: number = req.body.id;

  let isValid = true;
  isValid = isValid && Number.isInteger(id);
  if (!isValid) {
    assert.clientError(api_error.INVALID_PARAMETER_ERROR);
  }

  const [result, err] = await logic_example.setToken(id);
  assert.error(err);
  const data = {
    token: result,
  };

  const retValue = {
    error: api_error.OK,
    data: data,
  };
  return retValue;
}

export async function getToken(req) {
  const id: number = req.body.id;

  let isValid = true;
  isValid = isValid && Number.isInteger(id);
  if (!isValid) {
    assert.clientError(api_error.INVALID_PARAMETER_ERROR);
  }

  const [result, err] = await logic_example.getToken(id);
  assert.error(err);
  const data = {
    token: result,
  };

  const retValue = {
    error: api_error.OK,
    data: data,
  };
  return retValue;
}
