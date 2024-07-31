import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    constructor(private _router: Router) {}

    goTo(url: string | any[], queryParams: Params | null | undefined = undefined, fragment: string | undefined = undefined) {
        this._router.navigate(Array.isArray(url) ? url : [url], {
            queryParams: queryParams,
            fragment: fragment
        });
    }

    goBack(): void {
        window.history.back();
    }

    goForward(): void {
        window.history.forward();
    }

    redirectTo(url: string): void {
        this._router.navigateByUrl(url);
    }
}
