import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.component.html',
  styleUrls: ['./team-home.component.css']
})
export class TeamHomeComponent implements OnInit {

  team = {
    teamname: null,
    gold: null,
    agriculture: null,
    infantry: null,
    cavalry: null,
    siege: null,
    technology: null,
    finance: null,
    industry: null,
    transport: null,
  };

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.refreshTeamDetails();
  }

  refreshTeamDetails() {
    const teamid = sessionStorage.getItem('teamid');
    if (teamid) {
      this.userService.getCurrentTeam(teamid).subscribe(res => {
        if (res.status === 200) {
          this.team = res.team;
        }
      });
    }
  }

}
