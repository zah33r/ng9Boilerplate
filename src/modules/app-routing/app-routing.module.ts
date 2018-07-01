import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { AppMasterGuard } from '../../guards/app-master.guard';
import { LoginComponent } from '../../components/login/login.component';
import { BordereauComponent } from '../../components/import-wizard/bordereau/bordereau.component';
import { NameMatchingComponent } from '../../components/name-matching/name-matching.component';

const routes: Routes = [
    { path: 'bordereau', component: BordereauComponent, canActivate: [AppMasterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AppMasterGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AppMasterGuard] },
    { path: 'name-matching', component: NameMatchingComponent, canActivate: [AppMasterGuard] },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
