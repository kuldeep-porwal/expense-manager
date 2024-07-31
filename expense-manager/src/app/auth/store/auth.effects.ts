import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { isOk } from 'src/app/core/enums/application-status-code';

import { LoginResponse } from '../models';
import LoginDetail from '../models/login-detail';
import LoginErrorResponse from '../models/login-error-response';
import { AuthService } from '../services/auth.service';
import { authStateActions, authStateActions as fromActions } from './auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    constructor(private _actions$: Actions, private _authService: AuthService) {}

    login$ = createEffect(() =>
        this._actions$.pipe(
            ofType(fromActions.login),
            map((action: any) => action.loginRequest),
            exhaustMap((loginRequest: LoginDetail) =>
                this._authService.login(loginRequest).pipe(
                    switchMap((loginResponse: LoginResponse) => {
                        if (isOk(loginResponse.code)) {
                            return [authStateActions.loginSuccess({ loginResponse: loginResponse })];
                        }
                        return [authStateActions.loginFail({ loginErrorResponse: loginResponse })];
                    }),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            authStateActions.loginFail({
                                loginErrorResponse: { code: error.status, message: error.message } as LoginErrorResponse
                            })
                        )
                    )
                )
            )
        )
    );
}
