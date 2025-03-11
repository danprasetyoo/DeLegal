import express from 'express';
import userRoutes from './routes/userRoutes';
import documentRoutes from './routes/documentRoutes';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);

// Error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
);

export default app;
