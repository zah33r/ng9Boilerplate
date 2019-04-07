import { Component, OnInit } from '@angular/core';
import { MockData } from '../../constants/mock-data';
import { MatDialog } from '@angular/material';
import { DashboardService } from './dashboard.service';
import { BordereauComponent } from '../import-wizard/bordereau/bordereau.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    selectedTabIndex: number | null = 0;
    bxViewcolumnDefs = MockData.agGridColumnDefs_homeScreen;
    bxViewrowData = MockData.agGridRowDefs_homeScreen;
    workFlowViewcolumnDefs = [];
    workFlowViewrowData = [];
    dialogConfiguration = {
        width: '2000px',
        height: '900px',
        data: null,
        disableClose: true
    };

    constructor(public dialog: MatDialog, public dashboardService: DashboardService) {}

    ngOnInit() {
        this.getWfGridData();
    }

    onAddTowerClick($event: any) {
        this.openDialog();
    }

    openDialog() {
        this.dialog.open(BordereauComponent, this.dialogConfiguration);
    }

    getWfGridData() {
        const colDef: any[] = MockData.agGridColumnDefs_WF;

        colDef.map(column => {
            column.headerName = column.field;
        });

        this.workFlowViewcolumnDefs = colDef;
        this.workFlowViewrowData = MockData.agGridRowData_WF;
    }
}
