import Knex from 'knex';
import config from '../common/config';

const knex = Knex({
  client: 'mysql',
  connection: config.ENV === 'PROD' ? {
    host: '', // please enter url
    port: 3306,
    user: 'admin',
    password: '', // please enter password
    database: 'main',
  } : {
    host: 'host.docker.internal',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'main',
  },
});

// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: 'host.docker.internal',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'main',
//   }
// });

export default knex;
