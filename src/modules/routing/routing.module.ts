import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMasterGuard } from './guards/app-master.guard';
import { DashboardResolver } from './resolvers/dashboard-resolver/dashboard-resolver';
import { BordereauComponent } from '../feature/import-wizard/bordereau/bordereau.component';
import { LoginComponent } from '../feature/login/login.component';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { NameMatchingComponent } from '../feature/name-matching/name-matching.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { environment } from '../../environments/environment';

const CALLBACK_PATH = 'implicit/callback';
const oktaConfig = {
    clientId: environment.okta.ClientId,
    issuer: environment.okta.Issuer,
    redirectUri: environment.okta.RedirectUri,
    pkce: environment.okta.Pkce,
};

const routes: Routes = [
    { path: CALLBACK_PATH, component: OktaCallbackComponent },
    { path: 'bordereau', component: BordereauComponent, canActivate: [AppMasterGuard, OktaAuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AppMasterGuard, OktaAuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AppMasterGuard, OktaAuthGuard], resolve: { DashboardResolver } },
    { path: 'name-matching', component: NameMatchingComponent, canActivate: [AppMasterGuard, OktaAuthGuard] },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/dashboard',
    },
];

@NgModule({
    imports: [CommonModule, OktaAuthModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
})
export class RoutingModule {}
