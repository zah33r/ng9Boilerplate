import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [CommonModule, AgGridModule.withComponents([])],
    exports: [AgGridModule],
    declarations: []
})
export class AppAgGridModule {}
