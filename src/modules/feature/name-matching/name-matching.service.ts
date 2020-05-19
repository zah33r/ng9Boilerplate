import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseHttpService } from '../../http/BaseHttpService';
import { ApiEndpoints } from '../../shared/constants/api-endpoints';

@Injectable({
    providedIn: 'root',
})
export class NameMatchingService extends BaseHttpService {
    constructor(http: HttpClient) {
        super(http);
    }

    getNameMatchingResults(bordereauId: number, fileId: string): Observable<any> {
        return this.getData(ApiEndpoints.URL_BmsGetNameMatchResults + '/' + bordereauId + '/' + fileId);
    }
}
