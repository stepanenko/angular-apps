import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';
import { strict } from 'assert';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}