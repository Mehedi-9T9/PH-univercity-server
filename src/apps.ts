import express, { Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandle from './module/middleware/globalErrorHandelar';
import notFound from './module/middleware/notFound';

import router from './module/routers';
import { promise } from 'zod';
const app = express();

//perser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  Promise.reject()
});

app.use(globalErrorHandle);

//route not found
app.use(notFound);

export default app;
