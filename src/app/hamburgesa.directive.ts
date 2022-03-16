import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHamburgesa]'
})
export class HamburgesaDirective {

  constructor(private er:ElementRef, private r:Renderer2) {
    r.setStyle(er.nativeElement,'overflow','hidden');
   }

}
