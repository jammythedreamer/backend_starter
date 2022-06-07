enum ApiError {
  // common error
  OK = 1,
  // client error
  INVALID_PARAMETER_ERROR = 1001,

  // server error
  MYSQL_ERROR = 2001,
  REDIS_ERROR = 2002,
}

export default ApiError;
