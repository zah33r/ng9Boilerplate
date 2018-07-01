import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../services/BaseHttpService';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../constants/app-config';

@Injectable({
    providedIn: 'root'
})
export class DashboardService extends BaseHttpService {
    constructor(http: HttpClient) {
        super(http);
    }

    getBordereaus() {
        return this.getData(AppConfig.URL_BmsGetBordereaus);
    }
}
