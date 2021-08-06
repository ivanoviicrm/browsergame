import express from 'express';
import path from 'path';

import { userController } from './controllers/userController';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

userController(app);

export default app;
