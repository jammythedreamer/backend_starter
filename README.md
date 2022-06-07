# Architecture

### Spec

- Docker 
  - Node.js ( 14.18.2 w/ express )
- Mysql ( 8.0.28, AWS RDS )
- Redis ( 6.2.6, AWS ElastiCache )

local 개발환경은 docker-compose 를 사용. Mysql, redis 도 docker 로 띄워서 사용

### CI/CD

- Github Action + AWS Elastic Beanstalk

docker 를 통해 Node.js 서버를 띄운다.
현재 Immutable 로 세팅되어 있어 배포시, 새로운 instance 를 생성하고 성공하면 기존 instance 삭제

# APIs

health check 를 위한 API 외에는 모두 POST 를 사용한다. NOT RESTFUL

## w/o session

### `'/'`

- `GET`
- Response

```
"OK"
```


### `'/health'`

- `GET`
- Response

```
"OK"
```

### `'/env'`

- `GET`
- Response

```
"PROD"
```
"PROD" or "LOCAL"

### `'/test/mysql/insert'`

- `POST`
- Request body

  - memo: `string`


- Response

```
{
  "error": 1,
  "data": {
    "id": 1
  }
}
```

### `'/test/mysql/select'`

- `POST`
- Request body

  - id: `number`


- Response

```
{
  "error": 1,
  "data": {
    "id": 1,
    "memo": "hello, world!"
  }
}
```

### `'/test/redis/set'`

- `POST`
- Request body

  - id: `number`


- Response

```
{
  "error": 1,
  "data": {
    "token": "1677cf73-eb9a-4f45-bcec-2b1b06d2a79f"
  }
}
```

### `'/test/redis/get'`

- `POST`
- Request body

  - id: `number`


- Response

```
{
  "error": 1,
  "data": {
    "token": "1677cf73-eb9a-4f45-bcec-2b1b06d2a79f"
  }
}
```

# Error Code

[src/common/api_error.ts](https://github.com/jammythedreamer/backend-starter/blob/main/src/common/api_error.ts) 참고
