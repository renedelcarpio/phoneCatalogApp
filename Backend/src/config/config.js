import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
	path: path.resolve(__dirname, '..', '..', `${process.env.NODE_ENV}.env`),
});

const envConfig = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	HOST: process.env.HOST || 'localhost',
	PORT: process.env.PORT || '3000',
};

export default envConfig;
