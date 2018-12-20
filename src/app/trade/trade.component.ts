import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  from: string;
  to: string;
  gold: number;
  agriculture: number;
  infantry: number;
  cavalry: number;
  siege: number;
  technology: number;
  finance: number;
  industry: number;
  transport: number;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }

  trade() {
    if (this.agriculture === undefined) {
      this.agriculture = 0;
    }
    if (this.infantry === undefined) {
      this.infantry = 0;
    }
    if (this.cavalry === undefined) {
      this.cavalry = 0;
    }
    if (this.siege === undefined) {
      this.siege = 0;
    }
    if (this.technology === undefined) {
      this.technology = 0;
    }
    if (this.finance === undefined) {
      this.finance = 0;
    }
    if (this.industry === undefined) {
      this.industry = 0;
    }
    if (this.transport === undefined) {
      this.transport = 0;
    }
    this.adminService.trade(this.from,
                            this.to,
                            this.gold,
                            this.agriculture,
                            this.infantry,
                            this.cavalry,
                            this.siege,
                            this.technology,
                            this.finance,
                            this.industry,
                            this.transport).subscribe(res => {
      if (res.status === 200) {
        alert('Trade successfull');
      } else {
        alert(res.message);
      }
    });
  }

}
