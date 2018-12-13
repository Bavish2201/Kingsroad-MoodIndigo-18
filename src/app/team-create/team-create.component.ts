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
  }

  onCreateTeam() {
    this.userService.createTeam(this.teamname, this.username, this.username2,
      this.username3, this.username4).subscribe(resData => {
        console.log(resData);
        if (resData.status === 200) {
          this.showError = false;
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
