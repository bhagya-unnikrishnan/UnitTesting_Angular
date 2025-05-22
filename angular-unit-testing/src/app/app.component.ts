import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { HighlightDirective } from './highlight.directive';
import { StatusPipe } from './status.pipe';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [TaskListComponent, HighlightDirective, StatusPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
}