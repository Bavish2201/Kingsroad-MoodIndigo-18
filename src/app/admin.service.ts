import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) {}

  getUsersCount() {
    return this.http.get<any>('http://localhost:3000/api/admin/count/user');
  }

  getTeamsCount(): Number {
    return 0;
  }

  getLeaderboard() {
    return this.http.get<any>('http://localhost:3000/api/admin/leaderboard');
  }

  deleteAllUsers() {
    return this.http.get<any>('http://localhost:3000/api/admin/users/delete-all');
  }

}

