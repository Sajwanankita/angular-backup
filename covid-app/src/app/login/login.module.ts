// This is login feature module.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminLoginComponent } from './admin-login/admin-login.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AdminLoginComponent,
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class LoginModule {
  constructor() {
    console.log("Login Module loaded.");
  }
 }
