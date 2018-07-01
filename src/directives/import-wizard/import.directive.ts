import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[import-host]'
})
export class ImportDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
