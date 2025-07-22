import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './card/card';
import { Homepage } from './homepage/homepage';
import { Navbar } from './navbar/navbar';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Dashboard } from './dashboard/dashboard';
import { Manageusers } from './manageusers/manageusers';

@NgModule({
  declarations: [
    App,
    Card,
    Homepage,
    Navbar,
    Signin,
    Signup,
    Dashboard,
    Manageusers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
