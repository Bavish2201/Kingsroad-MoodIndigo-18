import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  teamid: string;
  invested = false;
  gold: number;
  military: number;
  food: number;
  research = 'none';

  military_invest: number;
  food_invest: number;

  display_message = 'Your team has already invested.';

  constructor(public userService: UserService, public adminService: AdminService) { }

  ngOnInit() {
    this.teamid = sessionStorage.getItem('teamid');
    this.refreshTeamDetails().then(() => {
      console.log('Refreshed team details');
    });
  }

  invest() {
    this.refreshTeamDetails().then((result) => {
      if (result === false) {

        this.gold -= this.military_invest + this.food_invest;
        this.military += this.military_invest;
        this.food += this.food_invest;

        this.adminService.getCurrentStoryline().subscribe(res => {

          this.gold += this.gold * res.storyline.gold_rate / 100;

          if (this.research === 'military') {
            this.gold += this.military * (res.storyline.military_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.military * res.storyline.military_rate / 100;
          }

          if (this.research === 'food') {
            this.gold += this.food * (res.storyline.food_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.food * res.storyline.food_rate / 100;
          }

          this.gold = Math.floor(this.gold);

          this.userService.invest(this.teamid, this.gold, this.military, this.food).subscribe(response => {
            if (response.status === 200) {
              this.invested = true;
              this.display_message = 'You have successfully invested.';
            } else {
              this.display_message = 'Something went wrong. Please try again.';
            }
          });
        });

      } else {
        this.invested = true;
      }
    });
  }

  refreshTeamDetails() {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentTeam(this.teamid).subscribe(response => {
        if (response.status === 200) {
          this.invested = response.team.invested;
          this.gold = response.team.gold;
          this.military = response.team.military;
          this.food = response.team.food;
          resolve(this.invested);
        } else {
          reject();
        }
      });
    });
  }
}
