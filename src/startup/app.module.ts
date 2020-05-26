import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from '../modules/routing/routing.module';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { AppAgGridModule } from '../modules/base/components/app-ag-grid/app-ag-grid.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CacheModule } from '../modules/cache/cache.module';
import { ToolbarComponent } from '../modules/feature/toolbar/toolbar.component';
import { HeaderComponent } from '../modules/feature/header/header.component';
import { HttpModule } from '../modules/http/http.module';
import { CoreModule } from '../modules/core/core.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent, ToolbarComponent],
    imports: [CoreModule, RoutingModule, AppMaterialModule, AppAgGridModule, FlexLayoutModule, CacheModule, HttpModule],
    entryComponents: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
