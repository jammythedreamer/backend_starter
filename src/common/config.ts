const env = process.env.NODE_ENV;

export default {
  local: {
    ENV: 'LOCAL',
  },
  prod: {
    ENV: 'PROD',
  },
}[env];
