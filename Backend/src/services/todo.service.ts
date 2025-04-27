import Todo from '../models/todo.models';

export const createTodo = async (title: string) => {
  const todo = new Todo({ title });
  return await todo.save();
};

export const getAllTodos = async () => {
  return await Todo.find();
};

export const updateTodo = async (id: string, data: Partial<{ title: string; completed: boolean }>) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTodo = async (id: string) => {
  return await Todo.findByIdAndDelete(id);
};
