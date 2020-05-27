import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from './dashboard.service';
import { MockData } from '../../shared/constants/mock-data';
import { SharedService } from '../../shared/shared.service';
import { EventService } from '../../shared/event/event.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
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
        disableClose: true,
    };

    constructor(public dialog: MatDialog, public dashboardService: DashboardService, private sharedService: EventService) {}

    ngOnInit() {
        this.sharedService.getSubscriber('dashboard').subscribe((res) => {
            console.log(res);
        });
        this.getWfGridData();
        this.dashboardService.getBordereaus().subscribe((res) => {
            console.log(res);
        });
    }

    onAddTowerClick($event: any) {
        // this.openDialog();
        this.sharedService.getSubscriber('dashboard').subscribe((res) => {
            console.log(res);
        });
        this.sharedService.getSubscriber('dashboard').emit('firing event data');
    }

    openDialog() {}

    getWfGridData() {
        const colDef: any[] = MockData.agGridColumnDefs_WF;

        colDef.map((column) => {
            column.headerName = column.field;
        });

        this.workFlowViewcolumnDefs = colDef;
        this.workFlowViewrowData = MockData.agGridRowData_WF;
    }
}
