import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor(public ele: ElementRef) { 
    this.ele.nativeElement.style.color = "red";
    this.ele.nativeElement.className = 'prasad';
  }

}
