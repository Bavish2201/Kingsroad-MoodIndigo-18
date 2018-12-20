import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  teams = [];

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.refreshLeaderboard();
  }

  calculateXP(team) {
    return team.gold
            + team.agriculture
            + team.infantry
            + team.cavalry
            + team.siege
            + team.technology
            + team.finance
            + team.industry
            + team.transport;
  }

  refreshLeaderboard() {
    this.adminService.getLeaderboard().subscribe(response => {
      console.log(response);
      this.teams = response.leaderboard;
      this.teams.sort((a, b) => {
        return (this.calculateXP(b) - this.calculateXP(a));
      });
    });
  }
}
