import request from 'supertest';

import app from '../../src/app';

describe('GET /api', () => {
  it('should return 200 OK', () => {
    return request(app).get('/user').expect(200);
  });
});
