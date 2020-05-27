import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '../../http/http.module';
import { AppAgGridModule } from '../../base/components/app-ag-grid/app-ag-grid.module';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';

@NgModule({
    declarations: [DashboardComponent, ],
    imports: [CommonModule, AppMaterialModule, AppAgGridModule, HttpModule, DashboardRoutingModule],
    providers: [DashboardService]
})
export class DashboardModule {}
