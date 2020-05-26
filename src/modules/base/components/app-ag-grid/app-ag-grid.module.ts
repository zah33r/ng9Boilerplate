import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridOverlayComponent } from './grid-overlay/grid-overlay.component';
import { AppMaterialModule } from '../../../app-material/app-material.module';
import { AgGridBaseComponent } from './ag-grid-base/ag-grid-base.component';
import { AgGridCellSelectEditor } from './ag-grid-framework-components/select-list.editor';
import { AgGridCellSelectRenderer } from './ag-grid-framework-components/select-list.renderer';
import { BordereauActionsRenderer } from './ag-grid-framework-components/bordereau-action.renderer';

@NgModule({
    declarations: [AgGridBaseComponent, GridOverlayComponent, AgGridCellSelectEditor, AgGridCellSelectRenderer, BordereauActionsRenderer],
    imports: [CommonModule, AppMaterialModule, AgGridModule.withComponents([])],
    exports: [AgGridModule, AgGridBaseComponent],
    entryComponents: [GridOverlayComponent, AgGridCellSelectEditor, AgGridCellSelectRenderer, BordereauActionsRenderer],
})
export class AppAgGridModule {}
