import { Component, OnInit } from '@angular/core';
import { MockData } from '../../constants/mock-data';
import { Bordereau } from '../import-wizard/bordereau/bordereau.model';
import { AppSharedService } from '../../services/app-shared/app-shared.service';
import { NameMatchingService } from './name-matching.service';

@Component({
    selector: 'app-name-matching',
    templateUrl: './name-matching.component.html',
    styleUrls: ['./name-matching.component.css']
})
export class NameMatchingComponent implements OnInit {
    columnDefs = MockData.agGridColumnDefs_NameMatching;
    rowData = MockData.agGridRowData_NameMatching;
    bordereauModel: Bordereau;

    constructor(public appSharedService: AppSharedService, public nameMatchingService: NameMatchingService) {}

    ngOnInit() {
        this.bordereauModel = this.appSharedService.bordereauModel;
        console.log(this.bordereauModel);
    }
    applyThreshold() {}
}
