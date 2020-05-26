import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from '../modules/routing/routing.module';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { AppAgGridModule } from '../modules/base/components/app-ag-grid/app-ag-grid.module';
import { AgGridBaseComponent } from '../modules/base/components/app-ag-grid/ag-grid-base/ag-grid-base.component';
import { FileUploadComponent } from '../modules/base/components/file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridCellSelectEditor } from '../modules/base/components/app-ag-grid/ag-grid-framework-components/select-list.editor';
import { AgGridCellSelectRenderer } from '../modules/base/components/app-ag-grid/ag-grid-framework-components/select-list.renderer';
import { BordereauActionsRenderer } from '../modules/base/components/app-ag-grid/ag-grid-framework-components/bordereau-action.renderer';
import { CacheModule } from '../modules/cache/cache.module';
import { DashboardComponent } from '../modules/feature/dashboard/dashboard.component';
import { UploadComponent } from '../modules/feature/import-wizard/upload/upload.component';
import { ToolbarComponent } from '../modules/feature/toolbar/toolbar.component';
import { LoginComponent } from '../modules/feature/login/login.component';
import { BordereauComponent } from '../modules/feature/import-wizard/bordereau/bordereau.component';
import { NameMatchingComponent } from '../modules/feature/name-matching/name-matching.component';
import { HeaderComponent } from '../modules/feature/header/header.component';
import { HttpModule } from '../modules/http/http.module';
import { CoreModule } from '../modules/core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UploadComponent,
        HeaderComponent,
        ToolbarComponent,
        FileUploadComponent,
        LoginComponent,
        BordereauComponent,
        NameMatchingComponent,
        BordereauActionsRenderer,
    ],
    imports: [CoreModule, RoutingModule, AppMaterialModule, AppAgGridModule, FileUploadModule, FlexLayoutModule, CacheModule, HttpModule],
    entryComponents: [BordereauActionsRenderer, UploadComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
