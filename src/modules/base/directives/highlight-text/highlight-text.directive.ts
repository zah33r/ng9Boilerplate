import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlightText]',
})
export class HighlightTextDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}
