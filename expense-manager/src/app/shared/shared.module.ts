import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as fromSharedComponents from './components/index';
import { directives } from './directives/index';
import { modules } from './modules';

const angularModules: any[] = [FormsModule];
@NgModule({
    declarations: [...fromSharedComponents.components, ...directives],
    imports: [CommonModule, ...angularModules, ...modules],
    exports: [...fromSharedComponents.components, ...directives, ...angularModules, ...modules]
})
export class SharedModule {}
