import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mi_number: string;
  password: string;
  con_password: string;
  showError = false;
  errorText = '';

  constructor(public userService: UserService,
              public router: Router) { }

  ngOnInit() {
    sessionStorage.removeItem('currentUser');
  }

  onRegister() {
    if (this.mi_number === undefined || this.password === undefined) {
      this.errorText = 'Please fill out all the fields';
      this.showError = true;
    } else if (this.password !== this.con_password) {
      this.errorText = 'Password did not match';
      this.showError = true;
    } else  {
      this.userService.registerUser(this.mi_number, this.password)
      .subscribe(resData => {
        if (resData.status === 200) {
          this.showError = false;
          sessionStorage.setItem('currentUser', resData.user_id);
          sessionStorage.setItem('username', resData.username);
          this.router.navigate(['create-team']);
        } else {
          this.showError = true;
          this.errorText = 'User already exists';
        }
      });
    }
  }

}
