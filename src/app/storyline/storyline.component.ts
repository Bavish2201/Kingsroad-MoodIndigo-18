import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storyline',
  templateUrl: './storyline.component.html',
  styleUrls: ['./storyline.component.css']
})
export class StorylineComponent implements OnInit {

  question: string;
  food_ratio: number;
  military_ratio: number;
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
    if (this.food_ratio === undefined) {
     this.food_ratio = 0;
    }
    if (this.military_ratio === undefined) {
      this.military_ratio = 0;
    }
    if (this.research_ratio === undefined) {
      this.research_ratio = 0;
    }
    if (this.gold_ratio === undefined) {
      this.gold_ratio = 0;
    }
    const story = {
      question: this.question,
      food: this.food_ratio,
      military: this.military_ratio,
      research: this.research_ratio,
      gold: this.gold_ratio
    };
    this.adminService.addStoryline(story).subscribe(res => {
      if (res.status === 401) {
        alert('Some error occured');
      } else {
        this.question = '';
        this.food_ratio = 0;
        this.military_ratio = 0;
        this.research_ratio = 0;
        this.gold_ratio = 0;
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


