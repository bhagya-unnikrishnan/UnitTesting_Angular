import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tasks', () => {
    const tasks = service.getTasks();
    expect(tasks.length).toBeGreaterThan(0);
    expect(tasks[0].name).toBe('Sample Task');
  });

  it('should add a task', () => {
    const initialLength = service.getTasks().length;
    service.addTask('New Task', 'high');
    const tasks = service.getTasks();
    expect(tasks.length).toBe(initialLength + 1);
    expect(tasks[tasks.length - 1].name).toBe('New Task');
    expect(tasks[tasks.length - 1].priority).toBe('high');
  });
});