import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storyline',
  templateUrl: './storyline.component.html',
  styleUrls: ['./storyline.component.css']
})
export class StorylineComponent implements OnInit {

  add_storyline = false;

  question: string;
  agriculture_ratio: number;
  infantry_ratio: number;
  cavalry_ratio: number;
  siege_ratio: number;
  technology_ratio: number;
  finance_ratio: number;
  industry_ratio: number;
  transport_ratio: number;
  research_ratio: number;
  gold_ratio: number;

  storylines = [];

  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
      this.router.navigate(['admin']);
    }
    this.getStorylines();
  }

  saveStoryline() {
    if (this.agriculture_ratio === undefined) {
     this.agriculture_ratio = 0;
    }
    if (this.infantry_ratio === undefined) {
      this.infantry_ratio = 0;
    }
    if (this.cavalry_ratio === undefined) {
      this.cavalry_ratio = 0;
    }
    if (this.siege_ratio === undefined) {
      this.siege_ratio = 0;
    }
    if (this.technology_ratio === undefined) {
      this.technology_ratio = 0;
    }
    if (this.finance_ratio === undefined) {
      this.finance_ratio = 0;
    }
    if (this.industry_ratio === undefined) {
      this.industry_ratio = 0;
    }
    if (this.transport_ratio === undefined) {
      this.transport_ratio = 0;
    }
    if (this.research_ratio === undefined) {
      this.research_ratio = 0;
    }
    if (this.gold_ratio === undefined) {
      this.gold_ratio = 0;
    }
    const story = {
      question: this.question,
      agriculture: this.agriculture_ratio,
      infantry: this.infantry_ratio,
      cavalry: this.cavalry_ratio,
      siege: this.siege_ratio,
      technology: this.technology_ratio,
      finance: this.finance_ratio,
      industry: this.industry_ratio,
      research: this.research_ratio,
      transport: this.transport_ratio,
      gold: this.gold_ratio
    };
    this.adminService.addStoryline(story).subscribe(res => {
      if (res.status === 401) {
        alert('Some error occured');
      } else {
        this.question = '';
        this.add_storyline = false;
        this.getStorylines();
      }
    });
  }

  getStorylines() {
    this.adminService.getStorylines().subscribe(res => {
      if (res.status === 200) {
        this.storylines = res.storylines;
        console.log(this.storylines);
      } else {
        alert('Some error occured');
      }
    });
  }

  deleteStoryline(_id: number) {
    const id = this.storylines[_id]._id;
    this.adminService.deleteStoryline(id).subscribe(res => {
      console.log(res);
      this.getStorylines();
    });
  }

  setCurrentStoryline(_id: number) {
    const id = this.storylines[_id]._id;
    this.adminService.setCurrentStoryline(id).subscribe(res => {
      alert('Storyline changed successfully');
    });
  }

  onLogout() {
    sessionStorage.removeItem('adminLoggedIn');
  }

}


