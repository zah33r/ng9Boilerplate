import { Injectable, Output, EventEmitter } from '@angular/core';
import { Bordereau } from '../../components/import-wizard/bordereau/bordereau.model';

@Injectable({
    providedIn: 'root'
})
export class AppSharedService {
    @Output() agGridSelectEditorValueChange: EventEmitter<any> = new EventEmitter<any>();
    bordereauModel = new Bordereau();
    globalFileId: string;

    constructor() {}

    getSubscriberForAgGridSelectEditorValueChange(): EventEmitter<any> {
        if (this.agGridSelectEditorValueChange.observers == null) {
            this.agGridSelectEditorValueChange = new EventEmitter();
        }
        return this.agGridSelectEditorValueChange;
    }
}
