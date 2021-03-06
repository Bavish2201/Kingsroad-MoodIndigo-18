import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  component = 'home';

  username: string;
  password: string;
  loggedIn  = false;

  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
      this.loggedIn = true;
      this.component = 'home';
    }
  }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loggedIn = true;
      sessionStorage.setItem('adminLoggedIn', 'true');
    } else {
      alert('Invalid username or password');
    }
  }

  onLogout() {
    this.loggedIn = false;
    sessionStorage.removeItem('adminLoggedIn');
  }

}
