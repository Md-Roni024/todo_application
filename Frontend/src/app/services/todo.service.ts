import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  __v?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/todos';
  
  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  private loadTodos(): void {
    this.http.get<Todo[]>(this.apiUrl).subscribe({
      next: (todos) => this.todos$.next(todos),
      error: (error) => console.error('Error loading todos:', error)
    });
  }

  refreshTodos(): void {
    this.loadTodos();
  }

  addTodo(title: string) {
    return this.http.post(this.apiUrl, { title }).pipe(
      tap(() => this.loadTodos())
    );
  }

  updateTodoStatus(id: string, completed: boolean) {
    return this.http.put(`${this.apiUrl}/${id}`, { completed }).pipe(
      tap(() => this.loadTodos())
    );
  }

  editTodoTitle(id: string, title: string) {
    return this.http.put(`${this.apiUrl}/${id}`, { title }).pipe(
      tap(() => this.loadTodos())
    );
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadTodos())
    );
  }
}