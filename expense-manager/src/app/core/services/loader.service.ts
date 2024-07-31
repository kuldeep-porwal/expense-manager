import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loaders: Map<string, BehaviorSubject<boolean>> = new Map();
    constructor() {}

    initializeLoader(id: string) {
        if (!this.loaders.has(id)) {
            this.loaders.set(id, new BehaviorSubject<boolean>(false));
        }
    }

    show(id: string) {
        this.getLoader(id)?.next(true);
    }

    hide(id: string) {
        this.getLoader(id)?.next(false);
    }

    private getLoader(id: string) {
        return this.loaders.get(id);
    }

    getState(id: string) {
        return this.getLoader(id)?.asObservable();
    }
}
