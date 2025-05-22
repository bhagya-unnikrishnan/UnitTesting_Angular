import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task.model';
import { HighlightDirective } from '../highlight.directive';
import { CommonModule } from '@angular/common';
import { StatusPipe } from '../status.pipe';

@Component({
  selector: 'app-task-list',
  imports: [HighlightDirective,CommonModule,StatusPipe],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(name: string, priority: string): void {
    if (name.trim()) {
      this.taskService.addTask(name, priority);
      this.tasks = this.taskService.getTasks();
    }
  }
}