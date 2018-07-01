import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    @Input() componentToolbar: string = '';
    @Input() isRowSelected: boolean = false;
    @Output() onAddTowerClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    AddTowerClick(event: any) {
        this.onAddTowerClick.emit(event);
    }
}
