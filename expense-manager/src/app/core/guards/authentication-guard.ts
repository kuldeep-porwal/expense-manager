import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { authStateSelector } from 'src/app/auth/store/auth.selectors';
import { AuthState } from 'src/app/auth/store/auth.state';
import { appRoutePath } from 'src/app/shared/constants/app-route-path';

import { NavigationService } from '../services';

export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const _authStore = inject(Store<AuthState>);
    const _navigationService = inject(NavigationService);
    console.log(route, state, state.url, { returnUrl: state.url });
    return _authStore.pipe(
        select(authStateSelector.isLoggedIn),
        take(1),
        map(isLoggedIn => {
            if (isLoggedIn) return true;

            _navigationService.goTo([appRoutePath.LOGIN], { returnUrl: state.url });
            return false;
        })
    );
};
