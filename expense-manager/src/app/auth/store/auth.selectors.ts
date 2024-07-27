import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_NAME } from './auth.actions';
import { AuthState } from './auth.state';

const _getAuthFeatureState = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME);
export const authStateSelector = {
    isLoggedIn: createSelector(_getAuthFeatureState, (state: AuthState) => {
        console.log(state, state.isLoggedIn);
        return state.isLoggedIn;
    })
};
