import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridOverlayComponent } from '../../components/base/ag-grid-base/ag-grid-components/grid-overlay/grid-overlay.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
    imports: [CommonModule, AppMaterialModule, AgGridModule.withComponents([])],
    exports: [AgGridModule],
    declarations: [GridOverlayComponent],
    entryComponents: [GridOverlayComponent]
})
export class AppAgGridModule {}
