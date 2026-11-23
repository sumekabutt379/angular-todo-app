import { Service, signal, computed } from '@angular/core';
import { Task } from './todo-item/todo-item';

@Service()
export class TodoStore {
  todos = signal<Task[]>([
    { id: 1, title: 'Learn Angular', done: false },
    { id: 2, title: 'Practice TypeScript', done: false },
    { id: 3, title: 'Build Todo App', done: false },
  ]);

  nextId: number = 4;

  toggleDone(id: number): void {
    this.todos.update((list) =>
      list.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  deleteTask(id: number): void {
    this.todos.update((list) => list.filter((t) => t.id !== id));
  }

  addTask(title: string): void {
    this.todos.update((list) => [
      ...list,
      { id: this.nextId, title: title, done: false },
    ]);
    this.nextId = this.nextId + 1;
  }

  countDone(): number {
    return this.todos().filter((t) => t.done).length;
  }
  doneCount = computed(() => this.todos().filter((t) => t.done).length);
  pendingCount = computed(() => this.todos().filter((t) => !t.done).length);
}