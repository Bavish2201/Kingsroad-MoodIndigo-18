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
  agriculture: number;
  infantry: number;
  cavalry: number;
  siege: number;
  technology: number;
  finance: number;
  industry: number;
  transport: number;
  research = 'none';

  agriculture_invest: number;
  infantry_invest: number;
  cavalry_invest: number;
  siege_invest: number;
  technology_invest: number;
  finance_invest: number;
  industry_invest: number;
  transport_invest: number;

  display_message = 'Your team has already invested.';

  showError = false;
  error_message = '';

  constructor(public userService: UserService, public adminService: AdminService) { }

  ngOnInit() {
    this.teamid = sessionStorage.getItem('teamid');
    this.refreshTeamDetails().then(() => {
      console.log('Refreshed team details');
    });
  }

  invest() {
    let total_invest = 0;
    if (this.agriculture_invest === undefined) {
      this.agriculture_invest = 0;
    }
    if (this.infantry_invest === undefined) {
      this.infantry_invest = 0;
    }
    if (this.cavalry === undefined) {
      this.cavalry_invest = 0;
    }
    if (this.siege_invest === undefined) {
      this.siege_invest = 0;
    }
    if (this.technology_invest === undefined) {
      this.technology_invest = 0;
    }
    if (this.finance_invest === undefined) {
      this.finance_invest = 0;
    }
    if (this.industry_invest === undefined) {
      this.industry_invest = 0;
    }
    if (this.transport_invest === undefined) {
      this.transport_invest = 0;
    }
    total_invest = this.agriculture_invest
                          + this.infantry_invest
                          + this.cavalry_invest
                          + this.siege_invest
                          + this.technology_invest
                          + this.finance_invest
                          + this.industry_invest
                          + this.transport_invest;
    if (this.gold < total_invest) {
      this.error_message = 'You do not have enough gold';
      this.showError = true;
      return;
    }
    this.refreshTeamDetails().then((result) => {
      if (result === false) {

        this.gold -= total_invest;
        this.agriculture += this.agriculture_invest;
        this.infantry += this.infantry_invest;
        this.cavalry += this.cavalry_invest;
        this.siege += this.siege_invest;
        this.technology += this.technology_invest;
        this.finance += this.finance_invest;
        this.industry += this.industry_invest;
        this.transport += this.transport_invest;

        this.adminService.getCurrentStoryline().subscribe(res => {

          this.gold += this.gold * res.storyline.gold_rate / 100;

          if (this.research === 'agriculture') {
            this.gold += this.agriculture * (res.storyline.agriculture_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.agriculture * res.storyline.agriculture_rate / 100;
          }

          if (this.research === 'infantry') {
            this.gold += this.infantry * (res.storyline.infantry_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.infantry * res.storyline.infantry_rate / 100;
          }

          if (this.research === 'cavalry') {
            this.gold += this.cavalry * (res.storyline.cavalry_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.cavalry * res.storyline.cavalry_rate / 100;
          }

          if (this.research === 'siege') {
            this.gold += this.siege * (res.storyline.siege_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.siege * res.storyline.siege_rate / 100;
          }

          if (this.research === 'technology') {
            this.gold += this.technology * (res.storyline.technology_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.technology * res.storyline.technology_rate / 100;
          }

          if (this.research === 'finance') {
            this.gold += this.finance * (res.storyline.finance_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.finance * res.storyline.finance_rate / 100;
          }

          if (this.research === 'industry') {
            this.gold += this.industry * (res.storyline.industry_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.industry * res.storyline.industry_rate / 100;
          }

          if (this.research === 'transport') {
            this.gold += this.transport * (res.storyline.transport_rate + res.storyline.research_rate) / 100;
          } else {
            this.gold += this.transport * res.storyline.transport_rate / 100;
          }

          this.gold = Math.floor(this.gold);

          this.userService.invest(this.teamid,
                                  this.gold,
                                  this.agriculture,
                                  this.infantry,
                                  this.cavalry,
                                  this.siege,
                                  this.technology,
                                  this.finance,
                                  this.industry,
                                  this.transport).subscribe(response => {
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
          this.agriculture = response.team.agriculture;
          this.infantry = response.team.infantry;
          this.cavalry = response.team.cavalry;
          this.siege = response.team.siege;
          this.technology = response.team.technology;
          this.finance = response.team.finance;
          this.industry = response.team.industry;
          this.transport = response.team.transport;
          resolve(this.invested);
        } else {
          reject();
        }
      });
    });
  }
}
