import { Component, OnInit } from '@angular/core';

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
