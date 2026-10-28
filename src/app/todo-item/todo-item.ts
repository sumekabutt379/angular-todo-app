import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() task: Task = { id: 0, title: '' };
  @Output() done = new EventEmitter<string>();
  @Output() remove = new EventEmitter<number>();

  markDone(): void {
    this.done.emit(this.task.title);
  }

  removeTask(): void {
    this.remove.emit(this.task.id);
  }
}