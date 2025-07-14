const request = require('supertest');
const app = require('../api/app');

describe('GET /', () => {
  it('risponde con Hello, Buzzer Node.js!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, Buzzer Node.js!');
  });
});
