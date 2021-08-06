import express from 'express';
import path from 'path';

import { loadApiEndpoints } from './controllers/api';
import { userController } from './controllers/user';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

loadApiEndpoints(app);
userController(app);

export default app;
