import * as dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  SERVER: {
    PORT: process.env.SERVER_PORT || 3001,
  },
  MARIADB: {
    HOST: process.env.MARIADB_HOST,
    PORT: process.env.MARIADB_PORT || 3306,
    USER: process.env.MARIADB_USER,
    PASSWORD: process.env.MARIADB_PASSWORD,
    DATABASE_NAME: process.env.MARIADB_DATABASE_NAME,
  },
};
