import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;
  points: number;
  control = 'home';

  constructor(public router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    if (!this.username) {
      this.router.navigate(['']);
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
