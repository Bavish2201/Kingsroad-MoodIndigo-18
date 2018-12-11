import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('currentUser') === 'null' ||
        sessionStorage.getItem('currentUser') === null) {
      this.router.navigate(['login']);
    } else if (sessionStorage.getItem('teamid') === 'null' ||
      sessionStorage.getItem('currentUser') === null) {
      this.router.navigate(['create-team']);
    } else {
      this.router.navigate(['dashboard']);
    }
  }

}
