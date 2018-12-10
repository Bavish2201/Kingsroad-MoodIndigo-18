import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {
  currentUser: User;

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(username: string, email: string, password: string) {
    const userData = {
      username: username,
      email: email,
      password: password
    };
    this.http.post<any>('http://localhost:3000/api/register', userData)
      .subscribe(resData => {
        console.log(resData);
        if (resData.message === 'successfull') {
          sessionStorage.setItem('currentUser', resData.user_id);
          sessionStorage.setItem('username', username);
          this.router.navigate(['create-team']);
        } else if (resData.message === 'Username exists') {
          alert('Username already taken');
        }
      });
  }

  loginUser(_username: string, _password: string) {
    const userData = {
      username: _username,
      password: _password
    };
    this.http.post<any>('http://localhost:3000/api/login', userData)
      .subscribe(resData => {
        sessionStorage.setItem('currentUser', resData.user);
        sessionStorage.setItem('username', resData.username);
        sessionStorage.setItem('teamid', resData.teamid);

        if (resData.teamid == null) {
          this.router.navigate(['create-team']);
        } else {
          this.router.navigate(['dashboard']);
        }

      });
  }

  createTeam(teamname: string, username1: string, username2: string,
    username3: string, username4: string) {
      this.http.post<any>('http://localhost:3000/api/register/team', {
        teamname: teamname,
        username1: username1,
        username2: username2,
        username3: username3,
        username4: username4
      }).subscribe(resData => {
        console.log(resData);
        if (resData.status === 0) {
          alert(resData.message);
        } else {
          // pass
        }
      });
    }

}

