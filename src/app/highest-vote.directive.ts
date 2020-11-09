import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor(private el: ElementRef) {
    this.highlight(this.highlightColor || this.defaultColor || 'black');
  }
@Input() defaultColor: string;
@Input('myHighlight') highlightColor: string;
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}
