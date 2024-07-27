import { Injectable } from '@angular/core';
import LoginDetail from '../models/login-detail';
import { Observable, of } from 'rxjs';
import LoggedInDetail from '../models/logged-in-detail';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userName = 'kuldeepporwal11@gmail.com';
    password = '12345';

    constructor() {}

    login(loginDetail: LoginDetail): Observable<LoggedInDetail | undefined> {
        if (loginDetail === null || loginDetail === undefined) return of(undefined);

        if (loginDetail.userName === this.userName && loginDetail.passWord === this.password) {
            return of({ userName: this.userName } as LoggedInDetail);
        }

        return of(undefined);
    }
}
