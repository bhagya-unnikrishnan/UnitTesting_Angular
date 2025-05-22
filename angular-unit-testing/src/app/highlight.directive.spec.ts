import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockElementRef = {
      nativeElement: { style: { backgroundColor: '' } }
    } as ElementRef;
    directive = new HighlightDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set background color to red for high priority', () => {
    directive.priority = 'high';
    directive.ngOnInit();
    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('#ffcccc'); // light red
  });

  it('should set background color to green for low priority', () => {
    directive.priority = 'low';
    directive.ngOnInit();
    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('#ccffcc');  // light green
  });
});