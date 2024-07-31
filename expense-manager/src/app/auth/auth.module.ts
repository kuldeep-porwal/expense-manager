import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import * as fromCoreComponents from './components/index';
import * as fromContainers from './containers/index';
import { AUTH_FEATURE_NAME } from './store/auth.actions';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducers';

@NgModule({
    declarations: [...fromContainers.components, ...fromCoreComponents.components],
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
