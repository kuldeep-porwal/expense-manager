import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-show-password',
    templateUrl: './show-password.component.html',
    styleUrls: ['./show-password.component.scss']
})
export class ShowPasswordComponent {
    showPasswordFlag: boolean = false;
    @Output() showPassword: EventEmitter<boolean> = new EventEmitter();
    constructor() {}

    showPasswordClick() {
        this.showPasswordFlag = !this.showPasswordFlag;
        this.showPassword.emit(this.showPasswordFlag);
    }
}
