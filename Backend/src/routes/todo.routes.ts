import express, { Request, Response } from 'express';
import { createTodoController, deleteTodoController, getTodosController, updateTodoController } from '../controllers/todo.controller';

const router = express.Router();

// Create Todo route
router.post('/', async (req: Request, res: Response) => {
  await createTodoController(req, res);
});

// Get all Todos route
router.get('/', async (req: Request, res: Response) => {
  await getTodosController(req, res);
});

// Update Todo route
router.put('/:id', async (req: Request, res: Response) => {
  await updateTodoController(req, res);
});

// Delete Todo route
router.delete('/:id', async (req: Request, res: Response) => {
  await deleteTodoController(req, res);
});

export default router;
