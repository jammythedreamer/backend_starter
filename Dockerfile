FROM node:14.18.2

WORKDIR /usr/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --silent

COPY . .

CMD [ "yarn", "prod"]

EXPOSE 4000
