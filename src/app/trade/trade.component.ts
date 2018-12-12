import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
