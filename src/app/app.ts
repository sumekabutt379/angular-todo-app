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
    { id: 1, title: 'HTML parho' },
    { id: 2, title: 'Angular seekho' },
    { id: 3, title: 'Portfolio banao' },
  ];
  nextId: number = 4;
  doneCount: number = 0;
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

  onDone(title: string): void {
    this.doneCount = this.doneCount + 1;
    console.log(title + ' complete hua');
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ id: this.nextId, title: this.newTask });
      this.nextId = this.nextId + 1;
      this.newTask = '';
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}