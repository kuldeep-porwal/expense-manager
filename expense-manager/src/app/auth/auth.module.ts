import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AUTH_FEATURE_NAME } from './store/auth.actions';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducers';

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        SharedModule,
        StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthModule {}
