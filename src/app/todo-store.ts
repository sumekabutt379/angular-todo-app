import { Service, signal, computed, effect } from '@angular/core';
import { Task } from './todo-item/todo-item';
import { of, interval } from 'rxjs';

@Service()
export class TodoStore {
    todos = signal<Task[]>(this.loadTodos());

  loadTodos(): Task[] {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Learn Angular', done: false },
      { id: 2, title: 'Practice TypeScript', done: false },
      { id: 3, title: 'Build Todo App', done: false },
    ];
  }

  
    nextId: number = Math.max(0, ...this.todos().map((t) => t.id)) + 1;

    constructor() {
    effect(() => {
            localStorage.setItem('todos', JSON.stringify(this.todos()));
    });
  }

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
    totalCount = computed(() => this.todos().length);
      message$ = of('Hello from Observable');
        timer$ = interval(2000);
}