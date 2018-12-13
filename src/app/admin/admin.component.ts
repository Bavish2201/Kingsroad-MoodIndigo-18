import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string;
  password: string;
  loggedIn  = false;

  usersCount: Number;

  constructor(public adminService: AdminService, public router: Router) { }

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
    sessionStorage.removeItem('adminLoggedIn');
  }

  showStorylines() {
    this.router.navigate(['admin-storyline']);
  }

  updateUsersCount() {
     this.adminService.getUsersCount().subscribe(response => {
      if (response.status === 200) {
        this.usersCount = response.count;
      }
    });
  }

  deleteAllUsersAndTeams() {
    this.adminService.deleteAllUsers().subscribe(response => {
      if (response.status === 201) {
        this.updateUsersCount();
      }
    });
    this.adminService.deleteAllTeams().subscribe(res => {

    });
  }
}
