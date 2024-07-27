import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    rememberMe: boolean = false;
    showPassword: boolean = false;
    constructor() {}

    onSubmit(loginForm: NgForm) {
        console.log(loginForm.form.value, this.rememberMe);
    }

    onShowPasswordClick(showPasswordEvent: boolean) {
        this.showPassword = showPasswordEvent;
    }
}
