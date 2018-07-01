import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() onMenuClick = new EventEmitter<any>();
    constructor() {}

    ngOnInit() {}

    menuClick() {
        this.onMenuClick.emit();
    }
}
