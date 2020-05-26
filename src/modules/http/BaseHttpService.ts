import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseHttpService {
    static contentType: string = 'application/json; charset=utf-8';
    constructor(private http: HttpClient) {}

    getData(url: string): Observable<any> {
        return this.http.get(url).map(this.extractData).catch(this.handleErrorObservable);
    }

    add(model, url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': BaseHttpService.contentType,
        });
        const options = { headers: headers };
        const body = JSON.stringify(model);
        return this.http.post(url, body, options).map(this.extractData).catch(this.handleErrorObservable);
    }

    deleteByBody(model, url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': BaseHttpService.contentType,
        });
        const options = { headers: headers };

        const body = JSON.parse(model);
        return this.http.post(url, body, options).map(this.extractData).catch(this.handleErrorObservable);
    }

    delete(url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': BaseHttpService.contentType,
        });
        const options = { headers: headers };

        return this.http.delete(url, options).map(this.extractData).catch(this.handleErrorObservable);
    }

    edit(model, url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': BaseHttpService.contentType,
        });
        const options = { headers: headers };
        const body = JSON.stringify(model);
        return this.http.put(url, body, options).map(this.extractData).catch(this.handleErrorObservable);
    }

    editByParams(url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': BaseHttpService.contentType,
        });
        const options = { headers: headers };
        return this.http.put(url, '', options).map(this.extractData).catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
