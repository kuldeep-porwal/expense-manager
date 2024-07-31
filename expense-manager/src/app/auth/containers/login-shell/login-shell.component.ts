import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import LoginDetail from '../../models/login-detail';
import { authStateActions } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.state';

@Component({
    selector: 'app-login-shell',
    templateUrl: './login-shell.component.html',
    styleUrl: './login-shell.component.scss'
})
export class LoginShellComponent {
    constructor(private _authStore: Store<AuthState>) {}
    login(loginDetail: LoginDetail) {
        console.log('dd', loginDetail);
        this._authStore.dispatch(authStateActions.login({ loginRequest: loginDetail }));
    }
}
