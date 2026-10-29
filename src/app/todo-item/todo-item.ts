import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() task: Task = { id: 0, title: '', done: false };
  @Output() done = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  markDone(): void {
    this.done.emit(this.task.id);
  }

  removeTask(): void {
    this.remove.emit(this.task.id);
  }
}