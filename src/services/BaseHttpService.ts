import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseHttpService {
    constructor(private http: HttpClient) {}

    getData(url: string): Observable<any> {
        return this.http.get(url);
        // .pipe(map(this.extractData))
        // .pipe(catchError(error => of(`Bad Promise: ${error}`)));
    }

    add(model, url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = { headers: headers };
        const body = JSON.stringify(model);
        return this.http.post(url, body, options).pipe(map(this.extractData));
        // .catchError(this.handleErrorObservable);
    }

    deleteByBody(model, url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = { headers: headers };

        const body = JSON.parse(model);
        return this.http.post(url, body, options).pipe(map(this.extractData));
        // .catchError(this.handleErrorObservable);
    }

    delete(url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = { headers: headers };

        return this.http.delete(url, options).pipe(map(this.extractData));
        // .catchError(this.handleErrorObservable);
    }

    edit(model, url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = { headers: headers };
        const body = JSON.stringify(model);
        return this.http.put(url, body, options).pipe(map(this.extractData));
        // .catchError(this.handleErrorObservable);
    }

    editByParams(url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const options = { headers: headers };
        return this.http.put(url, '', options).pipe(map(this.extractData));
        // .catchError(this.handleErrorObservable);
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
