import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) {}

  getUsersCount() {
    return this.http.get<any>('http://localhost:3000/api/admin/count/user');
  }

  getTeamsCount() {
    return this.http.get<any>('http://localhost:3000/api/admin/count/team');
  }

  getInvestedCount() {
    return this.http.get<any>('http://localhost:3000/api/admin/count/invested');
  }

  getLeaderboard() {
    return this.http.get<any>('http://localhost:3000/api/admin/leaderboard');
  }

  deleteAllUsers() {
    return this.http.delete<any>('http://localhost:3000/api/admin/users/delete-all');
  }

  deleteAllTeams() {
    return this.http.delete<any>('http://localhost:3000/api/admin/teams/delete-all');
  }

  deleteTeam(teamname: string) {
    return this.http.post<any>('http://localhost:3000/api/admin/team/delete', {teamname: teamname});
  }

  getTeam(teamname: string) {
    return this.http.post<any>('http://localhost:3000/api/admin/team/details', {teamname: teamname});
  }

  addStoryline(postData) {
    return this.http.post<any>('http://localhost:3000/api/admin/storyline', postData);
  }

  getStorylines() {
    return this.http.get<any>('http://localhost:3000/api/admin/storyline');
  }

  deleteStoryline(id: string) {
    return this.http.delete<any>('http://localhost:3000/api/admin/storyline/' + id);
  }

  setCurrentStoryline(_id: string) {
    return this.http.put<any>('http://localhost:3000/api/admin/storyline/change', {id: _id});
  }

  getCurrentStoryline() {
    return this.http.get<any>('http://localhost:3000/api/admin/storyline/current');
  }

  trade(from_teamname: string, to_teamname: string, gold: number, food: number, military: number) {
    return this.http.post<any>('http://localhost:3000/api/team/trade', {
      from_teamname: from_teamname,
      to_teamname: to_teamname,
      gold: gold,
      military: military,
      food: food
    });
  }

}

