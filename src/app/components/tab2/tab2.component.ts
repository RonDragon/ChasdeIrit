import { Component } from '@angular/core';
import { User } from 'src/app/models/beans/user/user';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { UserType } from 'src/app/models/enums/UserType/user-type.enum';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.html',
  styleUrls: ['tab2.scss']
})
export class Tab2Component {
  public user: User = new User();

  constructor(private loginService: LoginService , private router: Router) {}

  public login() {
    this.user.userType = UserType.VOLUNTEER;
    this.loginService.login(this.user).subscribe(user => {
  user.userType = UserType.VOLUNTEER;
  this.user.userType = UserType.VOLUNTEER;
  this.user = user;
  if (user.userType === UserType.VOLUNTEER) {
      this.router.navigate(['volunteer-component']);
    }
  console.log(user);

  }, err => {
    alert(err.message);
  });

}}
