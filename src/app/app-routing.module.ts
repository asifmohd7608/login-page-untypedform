import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginFormComponent } from './modules/user-login-form/user-login-form.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component:UserLoginFormComponent},
  {path:'profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
