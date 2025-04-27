import express from 'express';
import cors from 'cors';
import { connectToDatabase } from '../src/dbConnection/dbConnection';
import { PORT } from './config';
import todoRoutes from './routes/todo.routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use('/todos', todoRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
