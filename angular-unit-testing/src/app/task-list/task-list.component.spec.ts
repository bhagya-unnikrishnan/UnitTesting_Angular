import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../task.service';
import { HighlightDirective } from '../highlight.directive';
import { StatusPipe } from '../status.pipe';
 
describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: TaskService;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponent, HighlightDirective, StatusPipe], // Import standalone component, directive, and pipe
      providers: [TaskService]
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});