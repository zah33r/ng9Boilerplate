import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

export class HttpClientInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        throw new Error('Method not implemented.');
    }
}
