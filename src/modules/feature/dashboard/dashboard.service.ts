import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../../http/BaseHttpService';
import { ApiEndpoints } from '../../shared/constants/api-endpoints';
import { DashboardModule } from './dashboard.module';

@Injectable({
    providedIn: null,
})
export class DashboardService extends BaseHttpService {
    constructor(http: HttpClient) {
        super(http);
    }

    getBordereaus() {
        return this.getData(ApiEndpoints.URL_BmsGetBordereaus);
    }
}
