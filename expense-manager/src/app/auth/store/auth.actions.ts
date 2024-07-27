import { createAction, props } from '@ngrx/store';

import { LoginResponse } from '../models';
import LoginDetail from '../models/login-detail';
import LoginErrorResponse from '../models/login-error-response';
import SignupDetail from '../models/signup-detail';

export const AUTH_FEATURE_NAME = 'authFeature';
export const AUTH_ACTION = {
    LOGIN: `[${AUTH_FEATURE_NAME}] Login`,
    LOGIN_SUCCESS: `[${AUTH_FEATURE_NAME}] Login Success`,
    LOGIN_FAIL: `[${AUTH_FEATURE_NAME}] Login Fail`,
    SIGN_UP: `[${AUTH_FEATURE_NAME}] Signup`,
    SIGN_UP_SUCCESS: `[${AUTH_FEATURE_NAME}] Signup Success`,
    SIGN_UP_FAIL: `[${AUTH_FEATURE_NAME}] Signup Fail`
};

export const authStateActions = {
    login: createAction(AUTH_ACTION.LOGIN, props<{ loginRequest: LoginDetail }>()),
    loginSuccess: createAction(AUTH_ACTION.LOGIN_SUCCESS, props<{ loginResponse: LoginResponse }>()),
    loginFail: createAction(AUTH_ACTION.LOGIN_FAIL, props<{ loginErrorResponse: LoginErrorResponse }>()),
    signup: createAction(AUTH_ACTION.SIGN_UP, props<{ loginRequest: SignupDetail }>())
};
