import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bordereau } from './bordereau.model';

import { FileInfoModel } from '../upload/fileInfo.model';
import { BordereauStage } from './enums/bordereau-stage.enum';
import { BaseHttpService } from '../../../http/BaseHttpService';
import { ApiEndpoints } from '../../../shared/constants/api-endpoints';

@Injectable({
    providedIn: 'root',
})
export class BordereauService extends BaseHttpService {
    constructor(http: HttpClient) {
        super(http);
    }

    getFields(bordereauId: number, fileInfo: FileInfoModel, stage: BordereauStage): any {
        try {
            return this.getData(ApiEndpoints.URL_BmsGetFields + '/' + bordereauId + '/' + fileInfo.FileId + '/' + stage);
        } catch (error) {}
    }

    create(bordereauModel: Bordereau): Observable<Bordereau> {
        try {
            return this.add(bordereauModel, ApiEndpoints.URL_BmsCreateBordereaus);
        } catch (error) {}
    }
}
