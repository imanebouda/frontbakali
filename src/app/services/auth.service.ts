import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users :UserModel[]=[
    {username:"admin",password:"123" ,roles:['ADMIN','CREATE']},
    {username:"cashier",password:"123" ,roles:['CASHIER ','CREATE']},
    {username:"imane",password:"123" ,roles:['USER']},

  ];
  public loggedUser !:string ;
  public isloggedIn : boolean=false;
  public roles !: string[];

  constructor(private router:Router) {

  }
  SignIn(user: UserModel){
    let validUser =false;
    this.users.forEach(u=>{
      if (user.username==u.username && user.password==u.password){
        validUser=true;
        this.loggedUser=u.username !;
        this.isloggedIn =true;
        this.roles=u.roles !;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));

      }

    })
    return validUser;

  }

  isCreate(){
    if(!this.roles)
      return false;
    return (this.roles.indexOf('CREATE')>-1);
  }
  isAdmin(){
    if(!this.roles)
      return false;
    return (this.roles.indexOf('ADMIN')>-1);
  }

  logout(){
    this.loggedUser=undefined!;
    this.isloggedIn=false;
    this.roles=undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isloggedIn');
    this.router.navigate(['login']);




  }
}
