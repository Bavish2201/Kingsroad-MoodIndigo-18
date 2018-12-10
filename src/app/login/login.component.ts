import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onLogin() {
    this.userService.loginUser(this.username, this.password);
  }

}
