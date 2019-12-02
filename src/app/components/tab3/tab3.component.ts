import { Component } from '@angular/core';
import { User } from 'src/app/models/beans/user/user';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { UserType } from 'src/app/models/enums/UserType/user-type.enum';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.component.html',
  styleUrls: ['tab3.component.scss']
})
export class Tab3Component {
  public user: User = new User();

  constructor(private loginService: LoginService , private router: Router) {}

  public login() {
    this.user.userType = UserType.ADMIN;
    this.loginService.login(this.user).subscribe(user => {
  user.userType = UserType.ADMIN;
  this.user.userType = UserType.ADMIN;
  this.user = user;
  if (user.userType === UserType.ADMIN) {
      this.router.navigate(['admin-component']);
    }
  console.log(user);

  }, err => {
    alert(err.message);
  });

}}
