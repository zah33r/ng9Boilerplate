import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { GridOptions } from 'ag-grid';
import * as selectListEditorModule from './ag-grid-components/select-list.editor';
import * as selectListRendererModule from './ag-grid-components/select-list.renderer';
import * as bordereauActionsRendererModule from './ag-grid-components/bordereau-action.renderer';

@Component({
    selector: 'app-ag-grid-base',
    templateUrl: './ag-grid-base.component.html',
    styleUrls: ['./ag-grid-base.component.css']
})
export class AgGridBaseComponent implements OnInit, OnChanges {
    frameworkComponents: {};
    @Input() rowData: any;
    @Input() columnDefs: any;
    @Input() gridOptions: any;
    @Input() gridParamters: any;
    @Input() headerHeight: any;
    @Input() agGridRowHeight: number;
    @Input() pagination: boolean = false;
    @Input() paginationAutoPageSize: boolean = false;
    @Output() onRowSelected: any = new EventEmitter<any>();

    gridColumnApi: any;
    gridApi: any;

    components: {};
    rowSelection = 'single';
    editType: string;

    constructor() {}

    ngOnInit() {
        this.editType = 'fullRow';
        this.frameworkComponents = {
            AgGridCellSelectEditor: selectListEditorModule.AgGridCellSelectEditor,
            AgGridCellSelectRenderer: selectListRendererModule.AgGridCellSelectRenderer,
            BordereauActionsRenderer: bordereauActionsRendererModule.BordereauActionsRenderer
        };

        this.gridOptions = <GridOptions>{
            context: {
                validateSheetContext: this
            },
            enableFilter: true,
            defaultColDef: {
                // editable: true
                // stopEditingWhenGridLosesFocus=true,
            },
            onRowEditingStopped: this.onRowUpdateComplete
        };
    }

    ngOnChanges(changes: any) {
        const agGridRowHeight = changes['agGridRowHeight'];
        if (agGridRowHeight === undefined) {
            this.agGridRowHeight = 37;
        } else {
            this.gridOptions.rowHeight = agGridRowHeight;
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;

        if (this.agGridRowHeight === undefined) {
            this.agGridRowHeight = 37;
        } else {
            this.gridOptions.rowHeight = this.agGridRowHeight;
        }

        setTimeout(function() {
            params.api.resetRowHeights();
        }, 500);
    }

    onSelectionChanged(event) {
        if (this.gridApi.getSelectedRows().length === 0) {
            return;
        }
        this.onRowSelected.emit(this.gridApi.getSelectedRows());
    }

    selectEditorValueChange($event) {
        console.log('value rec: ' + $event);
    }

    onRowUpdateComplete(event) {
        console.log(event);
    }
}
