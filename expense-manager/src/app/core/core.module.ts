import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import * as fromCoreComponents from './components/index';

@NgModule({
    declarations: [...fromCoreComponents.components],
    imports: [CommonModule, SharedModule, AuthModule],
    exports: [...fromCoreComponents.components, AuthModule]
})
export class CoreModule {}
