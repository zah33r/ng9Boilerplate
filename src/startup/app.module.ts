import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from '../modules/routing/routing.module';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { AppAgGridModule } from '../modules/base/components/app-ag-grid/app-ag-grid.module';
import { FileUploadComponent } from '../modules/base/components/file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CacheModule } from '../modules/cache/cache.module';
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
        UploadComponent,
        HeaderComponent,
        ToolbarComponent,
        FileUploadComponent,
        LoginComponent,
        BordereauComponent,
        NameMatchingComponent,
    ],
    imports: [CoreModule, RoutingModule, AppMaterialModule, AppAgGridModule, FileUploadModule, FlexLayoutModule, CacheModule, HttpModule],
    entryComponents: [UploadComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
