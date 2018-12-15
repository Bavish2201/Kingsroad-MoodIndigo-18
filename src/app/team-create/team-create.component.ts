import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  username: string;
  createTeamMode = false;

  teamname: string;
  username2: string;
  username3: string;
  username4: string;

  showError = false;
  errorText = '';

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    if (this.username) {
      this.checkTeam(this.username);
    } else {
      this.router.navigate(['']);
    }
  }

  checkTeam(username: string) {
    this.userService.getUser(username).subscribe(res => {
      if (res.status === 200) {
        if (res.user.teamid) {
          this.router.navigate(['dashboard']);
        }
      }
    });
  }

  onCreateTeam() {
    this.userService.createTeam(this.teamname, this.username, this.username2,
      this.username3, this.username4).subscribe(resData => {
        if (resData.status === 200) {
          this.showError = false;
          sessionStorage.setItem('teamid', resData.teamid);
          sessionStorage.setItem('currentUser', resData._id);
          sessionStorage.setItem('username', resData.username);
          this.router.navigate(['dashboard']);
        } else {
          this.showError = true;
          this.errorText = resData.message;
        }
      });
  }

  onLogout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('teamid');
    sessionStorage.removeItem('username');
    this.router.navigate(['']);
  }

}
