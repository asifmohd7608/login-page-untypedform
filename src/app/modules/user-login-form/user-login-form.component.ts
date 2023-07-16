import { Component } from '@angular/core';
// import { User } from 'src/app/core/models/user';
import { UntypedFormControl,UntypedFormBuilder, Validators, UntypedFormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/core/services/userAuth/user-auth.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent {
  errorMsg:string='';

  defaultSkills:string[]=['js',"react"];

constructor(private ufb:UntypedFormBuilder,private userAuth:UserAuthService ,private router:Router){}

 loginForm=this.ufb.group({
  email:this.ufb.control('',[Validators.required,Validators.email]),
  password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
  address1:this.ufb.group({
    houseName:['',[Validators.required,Validators.minLength(3)]],
    city:['',[Validators.required,Validators.minLength(3)]],
    state:['',[Validators.required,Validators.minLength(3)]],
  }),
  skills: this.ufb.array(this.defaultSkills)
 })
 
get skills() {
    return this.loginForm.get('skills') as UntypedFormArray;
  }
  
  addSkill=()=> {
    const user = new UntypedFormControl('');
    this.skills.push(user);
  } 
  removeSkill=(index:number)=>{
    this.skills.removeAt(index)
  }

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
checkFormValues=()=>{
  // this.loginForm.controls['email'].patchValue(2)
  // this.loginForm.controls['password'].patchValue(2)
  console.log(this.loginForm.value)
}
}
