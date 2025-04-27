import mongoose, { Document, Schema } from 'mongoose';

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
