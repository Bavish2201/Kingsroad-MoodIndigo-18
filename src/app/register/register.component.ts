import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  private showError = false;
  private errorText = '';

  constructor(public userService: UserService,
              public router: Router) { }

  ngOnInit() {
    sessionStorage.removeItem('currentUser');
  }

  onRegister() {
    this.userService.registerUser(this.username, this.email, this.password)
    .subscribe(resData => {
      if (resData.status === 200) {
        this.showError = false;
        sessionStorage.setItem('currentUser', resData.user_id);
        sessionStorage.setItem('username', resData.username);
        this.router.navigate(['create-team']);
      } else {
        this.showError = true;
        this.errorText = 'Username already exists';
      }
    });
  }

}
