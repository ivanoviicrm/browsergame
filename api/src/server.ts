import app from './app';
import { pool } from './database/common/constants';

const server = app.listen(app.get('port'), () => {
  pool
    .getConnection()
    .then(() => console.log('connected to database!'))
    .catch((e) => console.error(e));

  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
