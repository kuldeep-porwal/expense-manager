import { Action, createReducer, on } from '@ngrx/store';

import { authStateActions } from './auth.actions';
import { _initialState, AuthState } from './auth.state';

const _authReducer = createReducer(
    _initialState,
    on(authStateActions.login, state => ({ ...state })),
    on(authStateActions.loginSuccess, (state, { loginResponse }) => ({
        ...state,
        userInfo: Object.create({ userName: loginResponse.userName, tokenInfo: loginResponse.tokenInfo })
    })),
    on(authStateActions.loginFail, (state, { loginErrorResponse }) => ({
        ...state
    }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}
