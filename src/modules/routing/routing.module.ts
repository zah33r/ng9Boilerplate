import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMasterGuard } from './guards/app-master.guard';
import { DashboardResolver } from './resolvers/dashboard-resolver/dashboard-resolver';
import { BordereauComponent } from '../feature/import-wizard/bordereau/bordereau.component';
import { LoginComponent } from '../feature/login/login.component';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { NameMatchingComponent } from '../feature/name-matching/name-matching.component';

const routes: Routes = [
    { path: 'bordereau', component: BordereauComponent, canActivate: [AppMasterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AppMasterGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AppMasterGuard], resolve: { DashboardResolver } },
    { path: 'name-matching', component: NameMatchingComponent, canActivate: [AppMasterGuard] },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/dashboard',
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {}
