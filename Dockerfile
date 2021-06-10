FROM node:14.16.1-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD yarn start

EXPOSE 3030
