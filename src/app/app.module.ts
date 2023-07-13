import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginFormComponent } from './modules/user-login-form/user-login-form.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { AuthConfigInterceptor } from './core/interceptors/authInterceptor/auth-config.interceptor.interceptor';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    UserProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthConfigInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
