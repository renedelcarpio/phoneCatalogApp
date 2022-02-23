import express from 'express';
import cors from 'cors';
import phones from './routes/phonesRoutes';

const app = express();

app.use(cors());

app.use('/phones', phones);

export default app;
