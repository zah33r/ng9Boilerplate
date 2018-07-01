import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../services/BaseHttpService';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../constants/app-config';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class NameMatchingService extends BaseHttpService {
    constructor(http: HttpClient) {
        super(http);
    }

    getNameMatchingResults(bordereauId: number, fileId: string): Observable<any> {
        return this.getData(AppConfig.URL_BmsGetNameMatchResults + '/' + bordereauId + '/' + fileId);
    }
}
