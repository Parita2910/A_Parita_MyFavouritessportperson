import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Hover]'
})
export class HoverDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('affect') Affect:any;


  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.classList.add(this.Affect);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.Affect);
}

}
