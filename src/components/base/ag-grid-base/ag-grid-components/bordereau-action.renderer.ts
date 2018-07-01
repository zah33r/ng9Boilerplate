import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Bordereau } from '../../../import-wizard/bordereau/bordereau.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppSharedService } from '../../../../services/app-shared/app-shared.service';

@Component({
    selector: 'child-cell',
    template: `
    <span>
      <div style="cursor:pointer">
        <mat-icon (click)="editBordereaue($event)">edit</mat-icon>
        <i class="material-icons" (click)="deleteBordereaue($event)">delete</i>
        <i class="material-icons" (click)="showNameMatching($event)">launch</i>
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
export class BordereauActionsRenderer implements ICellRendererAngularComp {
    public params: any;
    bordereauModel: Bordereau;
    dialogConfiguration = {
        width: '2000px',
        height: '900px',
        data: null,
        disableClose: true
    };

    constructor(public dialog: MatDialog, public router: Router, public appSharedService: AppSharedService) {}

    agInit(params: any): void {
        this.params = params;
        this.bordereauModel = this.params.data as Bordereau;
    }

    refresh(): boolean {
        return false;
    }

    editBordereaue($event: any) {
        this.dialogConfiguration.data = this.bordereauModel;
        this.openDialog();
    }

    deleteBordereaue($event: any) {
        alert('delete action will trigger here. api pending.');
    }

    openDialog(): void {}

    showNameMatching($event: any) {
        console.log($event);
        this.appSharedService.bordereauModel = this.bordereauModel;
        this.router.navigate(['/name-matching']);
    }
}
