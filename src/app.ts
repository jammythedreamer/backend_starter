import * as express from 'express';
import * as asyncify from 'express-asyncify';
import config from './common/config';
import {
  ClientError,
} from './common/errors';

import * as route_example from './LOGIC/route_example';

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;
const router = asyncify(express.Router());
const routerWithSession = asyncify(express.Router());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.status(200).send("OK");
});

router.get('/health', (req, res) => {
  res.status(200).send("OK");
});

router.get('/env', (req, res) => {
  res.status(200).send(config.ENV);
});

router.post('/test/mysql/insert', async (req, res) => {
  const result = await route_example.create(req);
  res.send(result);
});

router.post('/test/mysql/select', async (req, res) => {
  const result = await route_example.get(req);
  res.send(result);
});

router.post('/test/redis/set', async (req, res) => {
  const result = await route_example.setToken(req);
  res.send(result);
});

router.post('/test/redis/get', async (req, res) => {
  const result = await route_example.getToken(req);
  res.send(result);
});

app.use(router);

app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('start'));

function errorHandler(err, req, res, next) {
  let errorResult;
  if (err instanceof ClientError) {
    errorResult = {
      error: err.name,
    };
  } else {
    errorResult = {
      error: err.name,
      message: err.message,
      stack: err.stack,
    };
    // eslint-disable-next-line no-console
    console.log(errorResult);
  }
  res.status(500).send(errorResult);
}
