import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-team-storyline',
  templateUrl: './team-storyline.component.html',
  styleUrls: ['./team-storyline.component.css']
})
export class TeamStorylineComponent implements OnInit {

  question: string;
  food: string;
  military: string;
  research: string;
  other: string;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.refreshStoryline();
  }

  refreshStoryline() {
    this.adminService.getCurrentStoryline().subscribe(response => {
      if (response.status === 200) {
        this.question = response.storyline.question;
        this.food = response.storyline.food_return_ratio;
        this.military = response.storyline.military_return_ratio;
        this.research = response.storyline.research_return_ratio;
        this.other = response.storyline.other_return_ratio;
      }
    });
  }

}
