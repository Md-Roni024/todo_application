import { Request, Response } from 'express';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../services/todo.service';

//Create New Todo Controller
export const createTodoController = async (req: Request, res: Response) => {
  try {
    const todo = await createTodo(req.body.title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error });
  }
};



//Get All Todos Controller
export const getTodosController = async (_req: Request, res: Response) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};


//Update Todo Controller
export const updateTodoController = async (req: Request, res: Response) => {
  try {
    const updated = await updateTodo(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error });
  }
};


//Delete Todo Controller
export const deleteTodoController = async (req: Request, res: Response) => {
  try {
    const deleted = await deleteTodo(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error });
  }
};
