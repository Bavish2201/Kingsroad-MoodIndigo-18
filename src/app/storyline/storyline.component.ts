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
  other_ratio: number;

  storylines = [];

  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
      this.router.navigate(['admin']);
    }
    this.getStorylines();
  }

  saveStoryline() {
    const story = {
      question: this.question,
      food: this.food_ratio,
      military: this.military_ratio,
      research: this.research_ratio,
      others: this.other_ratio
    };
    this.adminService.addStoryline(story).subscribe(res => {
      if (res.status === 401) {
        alert('Some error occured');
      } else {
        this.question = '';
        this.food_ratio = 0;
        this.military_ratio = 0;
        this.research_ratio = 0;
        this.other_ratio = 0;
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
      this.home();
    });
  }

  onLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    this.home();
  }

  home() {
    this.router.navigate(['admin']);
  }
}


