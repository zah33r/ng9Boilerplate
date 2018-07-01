import { AfterViewInit, Component, ViewChild, ViewContainerRef, Output, EventEmitter } from '@angular/core';

import { ICellEditorAngularComp } from 'ag-grid-angular';
import { AppSharedService } from '../../../../services/app-shared/app-shared.service';

@Component({
    selector: 'editor-cell',
    template: `
    <div #container tabindex="0" (keydown)="onKeyDown($event)">
      <select style="width:150px;" placeholder="" [(ngModel)]="lookupValue">
        <option *ngFor="let item of lookupData" [value]="item">
          {{ item}}
          <option>
      </select>
    </div>
    <div>Default Value: <input type="text" name="Default Value" [(ngModel)]="defaultValue"></div>
    <div>Conversion Factor: <input type="text" name="Conversion Factor" [(ngModel)]="conversionFactor"></div>
    `,
    styles: [
        `
            .mood {
                border-radius: 15px;
                border: 1px solid grey;
                background: #e6e6e6;
                padding: 15px;
                text-align: center;
                display: inline-block;
                outline: none;
            }

            .default {
                padding-left: 10px;
                padding-right: 10px;
                border: 1px solid transparent;
                padding: 4px;
            }

            .selected {
                padding-left: 10px;
                padding-right: 10px;
                border: 1px solid lightgreen;
                padding: 4px;
            }
        `
    ]
})
export class AgGridCellSelectEditor implements ICellEditorAngularComp, AfterViewInit {
    lookupData: any;
    defaultValue: string = '';
    conversionFactor: string = '';
    lookupValue: any = '';
    private params: any;

    @ViewChild('container', { read: ViewContainerRef })
    public container;

    constructor(private appSharedService: AppSharedService) {}

    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        setTimeout(() => {
            this.container.element.nativeElement.focus();
        });
    }

    agInit(params: any): void {
        this.lookupData = params.values;
        this.params = params;
    }

    getValue(): any {
        return this.lookupValue;
    }

    isPopup(): boolean {
        return true;
    }

    onClick() {
        this.params.api.stopEditing();
    }

    onKeyDown(event): void {
        const key = event.which || event.keyCode;
        if (
            key === 37 || // left
            key === 39
        ) {
            event.stopPropagation();
        }
    }
}
