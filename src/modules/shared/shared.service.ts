import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    @Output() agGridSelectEditorValueChange: EventEmitter<any> = new EventEmitter<any>();
    globalFileId: string;

    constructor() {}

    getSubscriberForAgGridSelectEditorValueChange(): EventEmitter<any> {
        if (this.agGridSelectEditorValueChange.observers == null) {
            this.agGridSelectEditorValueChange = new EventEmitter();
        }
        return this.agGridSelectEditorValueChange;
    }
}
