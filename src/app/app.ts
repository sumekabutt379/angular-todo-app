import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoItem, Task } from './todo-item/todo-item';

@Component({
  imports: [RouterOutlet, TodoItem, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-app');
  userName: string = 'Ali';
  count: number = 0;
  fruits: string[] = ['Mango', 'Apple', 'Banana'];
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
  tasks: Task[] = [
    { id: 1, title: 'HTML parho', done: false },
    { id: 2, title: 'Angular seekho', done: false },
    { id: 3, title: 'Portfolio banao', done: false },
  ];
  nextId: number = 4;
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
      this.tasks.push({ id: this.nextId, title: this.newTask, done: false });
      this.nextId = this.nextId + 1;
      this.newTask = '';
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  toggleDone(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.done = !task.done;
    }
  }

  countDone(): number {
    return this.tasks.filter((t) => t.done).length;
  }
}