import { Component } from '@angular/core';
import {UserModel} from "../models/user.model";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user=new UserModel();
  constructor(private authService:AuthService,private router:Router) {
  }

  onLoggedin(){
    //console.log(this.user);
    let isValidUser : Boolean = this.authService.SignIn(this.user);
    if(isValidUser)
      this.router.navigate(['products-list']);
    else
      alert('user authentifaction failed')

  }
}
