import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private username: string;
  private password: string;
  private loggedIn  = false;

  private usersCount: Number;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
      this.loggedIn = true;
    }
    this.updateUsersCount();
  }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loggedIn = true;
      sessionStorage.setItem('adminLoggedIn', 'true');
    } else {
      alert('Invalid Username or password');
    }
  }

  onLogout() {
    this.loggedIn = false;
    sessionStorage.setItem('adminLoggedIn', 'false');
  }

  updateUsersCount() {
     this.adminService.getUsersCount().subscribe(response => {
      if (response.status === 200) {
        this.usersCount = response.count;
      }
    });
  }

  deleteAllUsers() {
    this.adminService.deleteAllUsers().subscribe(response => {
      if (response.status === 201) {
        this.updateUsersCount();
      }
    });
  }
}
