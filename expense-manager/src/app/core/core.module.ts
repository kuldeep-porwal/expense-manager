import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, AuthModule],
    exports: [AuthModule]
})
export class CoreModule {}
