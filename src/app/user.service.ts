import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {
  currentUser: User;

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(mi_number: string, password: string) {
    const userData = {
      username: mi_number,
      password: password
    };
    return this.http.post<any>('http://localhost:3000/api/register', userData);
  }

  loginUser(_username: string, _password: string) {
    const userData = {
      username: _username,
      password: _password
    };
    return this.http.post<any>('http://localhost:3000/api/login', userData);
  }

  createTeam(teamname: string, username1: string, username2: string,
    username3: string, username4: string) {
    return this.http.post<any>('http://localhost:3000/api/register/team', {
      teamname: teamname,
      username1: username1,
      username2: username2,
      username3: username3,
      username4: username4
    });
  }

  getUser(username: string) {
    return this.http.get<any>('http://localhost:3000/api/team/user/' + username);
  }

  getCurrentTeam(teamid: string) {
    return this.http.post<any>('http://localhost:3000/api/team', {teamid: teamid});
  }

  update_gold(teamid: string, gold: number) {
    return this.http.post<any>('http://localhost:3000/api/team/update_gold', {
      teamid: teamid,
      gold: gold
    });
  }

  invest(teamid: string, gold: number, military: number, food: number) {
    return this.http.post<any>('http://localhost:3000/api/team/invest', {
        teamid: teamid,
        gold: gold,
        military: military,
        food: food
    });
  }

}

