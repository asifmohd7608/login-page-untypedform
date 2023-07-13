import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/userAuth/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public userAuth:UserAuthService){}
  userData:any={}
ngOnInit(): void {
  this.userData=this.userAuth.userData
}
}
