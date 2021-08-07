import express from 'express';
import path from 'path';

import { usersController } from './controllers/users.controller';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

usersController(app);

export default app;
