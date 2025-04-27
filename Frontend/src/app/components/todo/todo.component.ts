import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../../services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  currentTodo: string = '';
  isEditing: boolean = false;
  editingId: string | null = null;
  
  private todoSubscription!: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoSubscription = this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    if (this.todoSubscription) {
      this.todoSubscription.unsubscribe();
    }
  }

  submitTodo() {
    if (!this.currentTodo.trim()) {
      return;
    }

    if (this.isEditing && this.editingId) {
      this.todoService.editTodoTitle(this.editingId, this.currentTodo).subscribe({
        next: () => {
          this.resetForm();
        },
        error: (error) => {
          console.error('Error updating todo:', error);
        }
      });
    } else {
      this.todoService.addTodo(this.currentTodo).subscribe({
        next: () => {
          this.resetForm();
        },
        error: (error) => {
          console.error('Error adding todo:', error);
        }
      });
    }
  }

  startEditing(todo: Todo) {
    this.isEditing = true;
    this.editingId = todo._id;
    this.currentTodo = todo.title;
  }

  cancelEditing() {
    this.resetForm();
  }
  
  resetForm() {
    this.currentTodo = '';
    this.isEditing = false;
    this.editingId = null;
  }

  toggleComplete(todo: Todo) {
    this.todoService.updateTodo(todo._id, !todo.completed).subscribe({
      error: (error) => {
        console.error('Error updating todo:', error);
      }
    });
  }

  confirmDelete(id: string) {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.deleteTodo(id);
    }
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    });
  }
  

  refreshTodos() {
    this.todoService.refreshTodos();
  }
}