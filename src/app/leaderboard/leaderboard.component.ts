import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  private teams = [];

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.refreshLeaderboard();
  }

  refreshLeaderboard() {
    this.adminService.getLeaderboard().subscribe(response => {
      console.log(response);
      this.teams = response.leaderboard;
    });
  }
}
