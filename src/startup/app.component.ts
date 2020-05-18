import { Component, OnInit } from '@angular/core';
import { CacheService } from '../modules/cache/cache.service';
import { StorageType } from '../modules/cache/storages/storage-type.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    routes: AppRouterLink[] = [];
    title = 'Angular';

    ngOnInit(): void {
        this.loadRoutes();
    }

    constructor(private cacheService:CacheService){
      this.cacheService.saveData('test', 'test', StorageType.sessionStorage);
    }

    loadRoutes(): void {
        this.routes.push(new AppRouterLink('//dashboard', 'Dashboard'));
        this.routes.push(new AppRouterLink('//name-matching', 'Ag-Grid Example'));
        this.routes.push(new AppRouterLink('//bordereau', 'Form Validation Example'));
    }
}

class AppRouterLink {
    constructor(link: string, name: string) {
        this.link = link;
        this.name = name;
    }

    public link: string;
    public name: string;
}
