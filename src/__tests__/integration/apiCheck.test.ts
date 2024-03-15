import request from 'supertest';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import app from '../../index';

describe('Testing whether root api is stabel or not', () => {
  it('Should return success true and api is stable message with status ok', async () => {
    const reqBody = await request(app).get('/api/apiCheck');

    expect(reqBody.statusCode).toBe<number>(StatusCodes.OK);
    expect(reqBody.body).toBeDefined();
    expect(reqBody.body.success).toBeTruthy();
    expect(reqBody.body.status).toBe<string>(ReasonPhrases.OK);
    expect(reqBody.body.message).toBe<string>('Api is stable');
  });
});
