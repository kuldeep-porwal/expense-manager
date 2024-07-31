import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { authStateSelector } from 'src/app/auth/store/auth.selectors';
import { AuthState } from 'src/app/auth/store/auth.state';
import { appRoutePath } from 'src/app/shared/constants/app-route-path';

import { NavigationService } from '../services';

export const adminGuard: CanActivateFn = (route, state) => {
    const _authStore = inject(Store<AuthState>);
    const _navigationService = inject(NavigationService);

    return _authStore.pipe(
        select(authStateSelector.isAdminUser),
        take(1),
        map(isAdminUser => {
            if (isAdminUser) return true;

            _navigationService.goTo([appRoutePath.ACCESS_DENIED]);
            return false;
        })
    );
};
