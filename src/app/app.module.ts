import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login/login.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.route";
import {ReactiveFormsModule} from "@angular/forms";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    NzAlertModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
