import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  userData:object={};
  constructor(private http:HttpClient, public router :Router) { }

  url:string=`https://evastaging.evalogical.com/api`;
  headers=new HttpHeaders().set('Content-Type','application/json');

  signIn=(user:User)=>{
    let data:object={...user,client_id:6,client_secret:"R00fmmW3BQUhJbCXSyv7U0drGXybc4z8kxFq4Lxp"};
    return this.http.post<any>(`${this.url}/login`,data);
  }

  getToken=()=>{
    return localStorage.getItem('userToken');
  }
  setUserData=(data:object)=>{
    this.userData=data
  }
  getUserData=()=>{
    return this.userData
  }
}
