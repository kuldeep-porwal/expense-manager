import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromCoreComponents from './core/components';
import { authenticationGuard } from './core/guards';
import { adminGuard } from './core/guards/admin.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
    {
        path: 'expense',
        canMatch: [authenticationGuard, adminGuard],
        loadChildren: () => import('./features/expense/expense.module').then(m => m.ExpenseModule)
    },
    {
        path: 'dashboard',
        canActivate: [authenticationGuard],
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'access-denied',
        component: fromCoreComponents.AccessDeniedComponent
    },
    {
        path: 'not-found',
        component: fromCoreComponents.NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
