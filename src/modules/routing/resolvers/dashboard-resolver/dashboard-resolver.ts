import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../authorization/authorization.service';
import { UserProfile } from '../../authorization/user-profile.model';

@Injectable({ providedIn: 'root' })
export class DashboardResolver implements Resolve<UserProfile> {
    constructor(private service: AuthorizationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.service.getHero(route.paramMap.get('id'));
    }
}
