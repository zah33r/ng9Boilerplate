import { Component, OnInit } from '@angular/core';
import { Bordereau } from '../import-wizard/bordereau/bordereau.model';
import { NameMatchingService } from './name-matching.service';
import { MockData } from '../../shared/constants/mock-data';
import { SharedService } from '../../shared/shared.service';

@Component({
    selector: 'app-name-matching',
    templateUrl: './name-matching.component.html',
    styleUrls: ['./name-matching.component.css'],
})
export class NameMatchingComponent implements OnInit {
    columnDefs = MockData.agGridColumnDefs_NameMatching;
    rowData = MockData.agGridRowData_NameMatching;
    bordereauModel: Bordereau;

    constructor(public appSharedService: SharedService, public nameMatchingService: NameMatchingService) {}

    ngOnInit() {
        this.bordereauModel = this.appSharedService.bordereauModel;
        console.log(this.bordereauModel);
    }
    applyThreshold() {}
}
