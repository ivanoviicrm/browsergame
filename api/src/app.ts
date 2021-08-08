import express from 'express';
import path from 'path';
import { usersController } from './controllers/users.controller';
import { CONFIG } from './config/config';
import { pool } from './database/common/constants';

// Connection to db
pool.getConnection();

// Create Express server
const app = express();

// Express configuration
app.set('port', CONFIG.SERVER.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

usersController(app);

export default app;
