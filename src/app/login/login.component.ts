import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  private showError = false;
  private errorText = '';

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.userService.loginUser(this.username, this.password)
      .subscribe(resData => {

        console.log(resData);
        if (resData.status === 200) {
          this.showError = false;
          sessionStorage.setItem('currentUser', resData.user);
          sessionStorage.setItem('username', resData.username);
          sessionStorage.setItem('teamid', resData.teamid);

          if (resData.teamid == null) {
            this.router.navigate(['create-team']);
          } else {
            this.router.navigate(['dashboard']);
          }
        } else {
          this.showError = true;
          this.errorText = 'Username or Password is invalid';
        }

      });
  }

}
