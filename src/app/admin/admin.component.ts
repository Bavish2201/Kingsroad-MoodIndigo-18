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

  currentStoryline: string;

  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
      this.loggedIn = true;
    }
    this.refreshStoryline();
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

  refreshStoryline() {
    this.adminService.getCurrentStoryline().subscribe(response => {
      if (response.status === 200) {
        this.currentStoryline = response.storyline.question;
      }
    });
  }
}
