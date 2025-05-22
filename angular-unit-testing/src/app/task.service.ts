import { Injectable } from '@angular/core';
import { Task } from './task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Sample Task', priority: 'low', completed: false }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string, priority: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      name,
      priority,
      completed: false
    };
    this.tasks.push(newTask);
  }
}