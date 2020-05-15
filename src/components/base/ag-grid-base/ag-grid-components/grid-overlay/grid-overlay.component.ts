import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular/lib/interfaces';
// import { ILoadingOverlayAngularComp } from '../../../../../../node_modules/ag-grid-angular/dist/interfaces';

@Component({
    selector: 'app-grid-overlay',
    templateUrl: './grid-overlay.component.html',
    styleUrls: ['./grid-overlay.component.css']
})
export class GridOverlayComponent implements ILoadingOverlayAngularComp {
    params: any;

    agInit(params): void {
        this.params = params;
    }
}
