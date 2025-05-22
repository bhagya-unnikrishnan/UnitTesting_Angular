import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() priority: string = 'low';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.highlight();
  }

  private highlight(): void {
    if (this.priority === 'high') {
      this.el.nativeElement.style.backgroundColor = '#ffcccc';
    } else {
      this.el.nativeElement.style.backgroundColor = '#ccffcc';
    }
  }
}