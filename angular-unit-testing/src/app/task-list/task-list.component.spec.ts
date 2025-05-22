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
 
  it('should load tasks on init', () => {
    spyOn(taskService, 'getTasks').and.returnValue([{ id: 1, name: 'Test Task', priority: 'low', completed: false }]);
    component.ngOnInit();
    expect(component.tasks.length).toBe(1);
    expect(taskService.getTasks).toHaveBeenCalled();
  });
 
  it('should add a task', () => {
    spyOn(taskService, 'addTask');
    spyOn(taskService, 'getTasks').and.returnValue([{ id: 1, name: 'New Task', priority: 'high', completed: false }]);
    component.addTask('New Task', 'high');
    expect(taskService.addTask).toHaveBeenCalledWith('New Task', 'high');
    expect(component.tasks.length).toBe(1);
  });
});