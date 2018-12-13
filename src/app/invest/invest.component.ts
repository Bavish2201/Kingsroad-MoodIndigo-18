import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  teamid: string;
  invested = false;
  gold: number;
  display_message = 'Your team has already invested.';

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.teamid = sessionStorage.getItem('teamid');
    this.refreshTeamDetails();
  }

  invest() {
    this.refreshTeamDetails();
    if (this.invested === false) {
      this.userService.update_gold(this.teamid, 200).subscribe(response => {
        if (response.status === 200) {
          this.invested = true;
          this.display_message = 'You have successfully invested.';
        }
      });
    }
  }

  refreshTeamDetails() {
    this.userService.getCurrentTeam(this.teamid).subscribe(response => {
      if (response.status === 200) {
        this.invested = response.team.invested;
        this.gold = response.team.gold;
      }
    });
  }
}
