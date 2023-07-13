import { Component,OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/userAuth/user-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userData:any={}

  constructor(public authService:UserAuthService){}

  ngOnInit(): void {
  this.userData=this.authService.getUserData()
}
}
