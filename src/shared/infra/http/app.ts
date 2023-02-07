import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const origin = {
	origin: '*',
};

const app: Express = express();

app.use(cors(origin));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`[App]: Listening on port ${port}`);
});
