import express, { request, response } from 'express';
import { helloGod } from './routes';

const app = express();

app.get('/', helloGod);

app.listen(3333);
