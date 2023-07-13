import { Component } from '@angular/core';
// import { User } from 'src/app/core/models/user';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/core/services/userAuth/user-auth.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent {
  errorMsg:string='';
constructor(private fb:FormBuilder,private userAuth:UserAuthService ,private router:Router){}

 loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
 })

onSubmit=()=>{
  let formValues=this.loginForm.value;
  this.userAuth.signIn({email:formValues.email,password:formValues.password}).subscribe(res=>{
    localStorage.setItem('userToken',res.data.token)
    this.userAuth.setUserData(res.data.user[0]);
      this.router.navigate(['profile']);
    },err=>{
      this.errorMsg=err.error.message;
    })
}
}
