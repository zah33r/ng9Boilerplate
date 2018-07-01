import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../services/BaseHttpService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bordereau } from './bordereau.model';
import { AppConfig } from '../../../constants/app-config';
import { FileInfoModel } from '../upload/fileInfo.model';
import { BordereauStage } from './enums/bordereau-stage.enum';

@Injectable({
    providedIn: 'root'
})
export class BordereauService extends BaseHttpService {
    constructor(http: HttpClient) {
        super(http);
    }

    getFields(bordereauId: number, fileInfo: FileInfoModel, stage: BordereauStage): any {
        try {
            return this.getData(AppConfig.URL_BmsGetFields + '/' + bordereauId + '/' + fileInfo.FileId + '/' + stage);
        } catch (error) {}
    }

    create(bordereauModel: Bordereau): Observable<Bordereau> {
        try {
            return this.add(bordereauModel, AppConfig.URL_BmsCreateBordereaus);
        } catch (error) {}
    }
}
