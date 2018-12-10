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

  constructor(public userService: UserService,
              public router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.userService.registerUser(this.username, this.email, this.password);
  }

}
