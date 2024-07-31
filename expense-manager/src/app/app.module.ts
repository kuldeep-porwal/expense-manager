import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ExpenseModule } from './features/expense/expense.module';
import { SharedModule } from './shared/shared.module';

const angularModules: any[] = [CommonModule, BrowserModule, BrowserAnimationsModule];
const customModules: any[] = [CoreModule, SharedModule, ExpenseModule];
const storeModules: any[] = [StoreModule.forRoot({}), EffectsModule.forRoot([])];
@NgModule({
    declarations: [AppComponent],
    imports: [...angularModules, AppRoutingModule, ...storeModules, ...customModules],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
