// Heart of the application
import express from 'express';

import { Server, createServer } from 'http';

import routes from '../routes';
import corsMiddleware from '../middlewares/corsMiddleware';
import { expressJSONMiddleware, expressURLEncodedMiddleware } from '../middlewares/expressMiddlewares';
import URLS, { API_BASE } from '../config/constants/URLS';
import cookieParser from 'cookie-parser';

class AppService {
  private app: express.Application;
  private httpServer: Server;

  constructor() {
    this.app = express();

    this.httpServer = createServer(this.app);
  }

  private setupMiddlewares(): void {
    this.app.use(cookieParser());
    this.app.use(corsMiddleware());
    this.app.use(expressJSONMiddleware());
    this.app.use(expressURLEncodedMiddleware());
  }

  private setupEndpoints(): void {
    this.app.use(API_BASE, routes);
  }

  public async initialize() {
    this.setupMiddlewares();

    this.setupEndpoints();

    this.httpServer.listen(URLS.MAIN_URLS.SERVER_PORT, '0.0.0.0', () =>
      console.log(`Server started, ${URLS.MAIN_URLS.SERVER_FULL_URL}`),
    );
  }
}

export default new AppService();
