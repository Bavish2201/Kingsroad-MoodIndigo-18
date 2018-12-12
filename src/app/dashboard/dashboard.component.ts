import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
