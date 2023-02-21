import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.display='block';
   }

}
