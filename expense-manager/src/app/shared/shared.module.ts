import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './modules/custom-material.module';
import { ShowPasswordComponent } from './components/show-password/show-password.component';

@NgModule({
    declarations: [NotFoundComponent, ShowPasswordComponent],
    imports: [CommonModule, FormsModule, CustomMaterialModule],
    exports: [NotFoundComponent, ShowPasswordComponent, FormsModule, CustomMaterialModule]
})
export class SharedModule {}
