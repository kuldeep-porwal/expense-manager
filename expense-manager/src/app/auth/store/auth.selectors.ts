import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isAdmin } from 'src/app/core/enums/user-role';
import { isTimeExpired } from 'src/app/shared/utils/time-utils';

import { AUTH_FEATURE_NAME } from './auth.actions';
import { AuthState } from './auth.state';

const _getAuthFeatureState = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME);

export const _isLoggedIn = createSelector(_getAuthFeatureState, (state: AuthState) => {
    return state.userInfo !== undefined && state.userInfo.tokenInfo != undefined && isTimeExpired(state.userInfo.tokenInfo.expireAt);
});

export const _getUserInfo = createSelector(_getAuthFeatureState, (state: AuthState) => {
    return state.userInfo;
});

export const _isAdminUser = createSelector(_isLoggedIn, _getUserInfo, (isLoggedIn, userInfo) => {
    return isLoggedIn && userInfo && isAdmin(userInfo?.role);
});

export const authStateSelector = { isLoggedIn: _isLoggedIn, getUserInfo: _getUserInfo, isAdminUser: _isAdminUser };
