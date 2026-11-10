import { Service } from '@angular/core';
import { Task } from './todo-item/todo-item';

@Service()
export class TodoStore {
    todos: Task[] = [
    { id: 1, title: 'Learn Angular', done: false },
    { id: 2, title: 'Practice TypeScript', done: false },
   { id: 3, title: 'Build Todo App', done: false },
  ];
}