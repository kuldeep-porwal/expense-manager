import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ApiStatusCode } from 'src/app/core/enums/application-status-code';

import { LoginResponse } from '../models';
import LoginDetail from '../models/login-detail';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userName = 'kuldeepporwal11@gmail.com';
    password = '12345';

    constructor() {}

    login(loginDetail: LoginDetail): Observable<LoginResponse> {
        console.log(loginDetail, loginDetail.userName === this.userName && loginDetail.password === this.password);
        if (loginDetail.userName === this.userName && loginDetail.password === this.password) {
            return of({
                code: ApiStatusCode.Ok,
                userName: this.userName,
                tokenInfo: { expireAt: new Date('01/01/2025').getMilliseconds() }
            } as LoginResponse);
        }
        return of({ code: ApiStatusCode.Error, message: 'Invalid Login' } as LoginResponse);
    }
}
