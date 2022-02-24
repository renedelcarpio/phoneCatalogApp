import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Phone routes test', () => {
	test('should response ok', async () => {
		const result = await request.get('/phones');
		expect(result.status).toBe(200);
	});
});
