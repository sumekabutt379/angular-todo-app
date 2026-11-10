import { Service } from '@angular/core';
import { Task } from './todo-item/todo-item';

@Service()
export class TodoStore {
  todos: Task[] = [
    { id: 1, title: 'Learn Angular', done: false },
    { id: 2, title: 'Practice TypeScript', done: false },
    { id: 3, title: 'Build Todo App', done: false },
  ];

  toggleDone(id: number): void {
    const task = this.todos.find((t) => t.id === id);
    if (task) {
      task.done = !task.done;
    }
  }

  deleteTask(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
  
  nextId: number = 4;

  addTask(title: string): void {
    this.todos.push({ id: this.nextId, title: title, done: false });
    this.nextId = this.nextId + 1;
  }
}