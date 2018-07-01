import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'child-cell',
    template: `
    <span>
      <div *ngIf="fmModel.ExcelColumn != '' || fmModel.DefaultValue != '' || fmModel.ConversionFactor != ''">
        <div>{{fmModel.ExcelColumn}}</div>
        <div>{{fmModel.DefaultValue}}</div>
        <div>{{fmModel.ConversionFactor}}</div>
      </div>
    </span>
    `,
    styles: [
        `
            .div {
                height: 100px;
            }
        `
    ]
})
export class AgGridCellSelectRenderer implements ICellRendererAngularComp {
    public params: any;
    fmModel: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}
