import { TodoStore } from './todo-store';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoItem, Task } from './todo-item/todo-item';
import { UsersGrid } from './users-grid/users-grid';

@Component({
  imports: [RouterOutlet, RouterLink, FormsModule, TodoItem, UsersGrid],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-app');
    store = inject(TodoStore);
           constructor() {
    this.store.message$.subscribe((msg) => {
      console.log(msg);
    });

    const sub = this.store.timer$.subscribe((n) => {
      console.log('Tick:', n);
    });

    setTimeout(() => {
      sub.unsubscribe();
    }, 10000);
  }
    userName: string = 'Ali';
  count: number = 0;
  fruits: string[] = ['Mango', 'Apple', 'Banana'];
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
  newTask: string = '';

  increase(): void {
    this.count = this.count + 1;
  }

  decrease(): void {
    this.count = this.count - 1;
  }

  reset(): void {
    this.count = 0;
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.store.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(id: number): void {
    this.store.deleteTask(id);
  }

  toggleDone(id: number): void {
    this.store.toggleDone(id);
  }

  countDone(): number {
    return this.store.countDone();
  }
}