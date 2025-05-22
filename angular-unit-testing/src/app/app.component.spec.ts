import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
 
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TaskListComponent] // Use imports for standalone components
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
 
  it('should have a title "Task Manager"', () => {
    expect(component.title).toEqual('Task Manager');
  });
 
  it('should render title in h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Task Manager');
  });
});
 