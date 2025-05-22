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
});