import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    getHero(id: string): any {
        return 'hero';
    }

    constructor() {}
}
