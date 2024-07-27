import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { authStateActions } from '../../store/auth.actions';
import { authStateSelector } from '../../store/auth.selectors';
import { AuthState } from '../../store/auth.state';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    rememberMe: boolean = false;
    showPassword: boolean = false;
    loggedIn$: Observable<boolean>;
    constructor(private _authStore: Store<AuthState>) {
        this.loggedIn$ = this._authStore.pipe(select(authStateSelector.isLoggedIn));
    }
    ngOnInit(): void {
        this.loggedIn$.subscribe(x => {
            console.log(x);
        });
    }

    onSubmit(loginForm: NgForm) {
        console.log(loginForm.form.value, this.rememberMe);
        this._authStore.dispatch(authStateActions.login({ loginRequest: loginForm.value }));
    }

    onShowPasswordClick(showPasswordEvent: boolean) {
        this.showPassword = showPasswordEvent;
    }
}
