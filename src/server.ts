import 'reflect-metadata';
import express from 'express';

import DatabaseFactory from './configurations/factories/databaseFactory';
import Routes from './configurations/router/routes';
import App from './app';

const app = new App({
  port: 5000,
  middleWares: [
    express.json(),
    express.urlencoded({ extended: true }),
  ],
  router: new Routes().getRouter(),
  database: DatabaseFactory.getInstance()
});

app.databaseSetup();
app.listen();
