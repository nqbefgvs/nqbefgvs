import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[colors]'
})
export class ColorsDirective {
  constructor(el: ElementRef) {

  }
}
