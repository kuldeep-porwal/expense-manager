import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authenticationGuard } from '../core/guards';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginShellComponent },
    { path: 'logout', canActivate: [authenticationGuard], component: LogoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
