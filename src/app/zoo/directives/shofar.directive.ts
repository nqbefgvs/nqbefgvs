import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[shofar]'
})
export class ShofarDirective {
  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'red'
  }
}
