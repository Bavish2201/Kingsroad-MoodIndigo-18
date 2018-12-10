import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  onCreateTeam() {
    this.userService.createTeam(this.teamname, this.username, this.username2,
      this.username3, this.username4);
  }

}
