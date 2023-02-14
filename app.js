import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.js';
import kanbanRoutes from './routes/kanban.js';
import nounRoutes from './routes/noun.js';
import pkg from 'express-jwt';
const { expressjwt } = pkg;
import jwks from 'jwks-rsa';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/build')));

export const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 500,
    jwksUri: 'https://dev-k52tn9kn.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://www.polish-api.com',
  issuer: 'https://dev-k52tn9kn.eu.auth0.com/',
  algorithms: ['RS256'],
}).unless({ path: ['/'] });

app.get('/', async (req, res, next) => {
  res.send({ message: 'App entry point' });
});

app.use(jwtCheck);

app.use('/users', userRouter);
app.use('/protected/kanban', kanbanRoutes);
app.use('/protected/nouns', jwtCheck, nounRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Internal server error';
  res.status(status).send(message);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`App running @ http://localhost:${PORT}`));

export default app;
