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
  food: number;
  military: number;
  gold: number;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }

  trade() {
    this.adminService.trade(this.from, this.to, this.gold, this.food, this.military).subscribe(res => {
      if (res.status === 200) {
        alert('Trade successfull');
      } else {
        alert(res.message);
      }
    });
  }

}
