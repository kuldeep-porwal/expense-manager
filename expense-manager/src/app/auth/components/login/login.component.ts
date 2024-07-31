import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import LoginDetail from '../../models/login-detail';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    @Output() login: EventEmitter<LoginDetail> = new EventEmitter<LoginDetail>();

    rememberMe: boolean = false;
    showPassword: boolean = false;
    isLoading: boolean = false;
    onSubmit(loginForm: NgForm) {
        this.isLoading = true;
        this.login.emit({ ...loginForm.value, rememberMe: this.rememberMe }); // Simulate an HTTP request
        setTimeout(() => {
            // After login
            this.isLoading = false;
        }, 3000);
    }

    onShowPasswordClick(showPasswordEvent: boolean) {
        this.showPassword = showPasswordEvent;
    }
}
