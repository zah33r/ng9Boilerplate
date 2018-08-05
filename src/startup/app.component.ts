import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../services/BaseHttpService';
import { environment } from '../environments/environment';
import { AppConfig } from '../constants/app-config';
import { Observable } from '../../node_modules/rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    routes: AppRouterLink[] = [];
    title = 'Angular';
    configLoaded: boolean = false;
    appConfigPath: string = '/assets/appConfig.json';

    constructor(private http: BaseHttpService) {}

    ngOnInit(): void {
        this.loadRuntimeDependencies();
    }

    private loadRuntimeDependencies() {
        setTimeout(() => {
            this.http
                .getData(this.appConfigPath)
                // .pipe(catchError(this.configMissingErrorHandler.bind(this)))
                .subscribe((config: JSON) => {
                    this.overrideStaticConfigurations(config);
                    this.configLoaded = true;
                });
        }, 5000);
    }

    private configMissingErrorHandler(error: Response | any) {
        console.warn(AppConfig.InfoMessage_RunTimeConfigs);
        this.configLoaded = true;
        console.log(environment);
        return Observable.create();
    }

    private overrideStaticConfigurations(configObject: JSON) {
        environment.appRoot = configObject['appRoot'];
        environment.production = configObject['production'];
        console.log(environment);
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
