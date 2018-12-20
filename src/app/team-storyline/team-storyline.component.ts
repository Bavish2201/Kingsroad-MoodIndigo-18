import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-team-storyline',
  templateUrl: './team-storyline.component.html',
  styleUrls: ['./team-storyline.component.css']
})
export class TeamStorylineComponent implements OnInit {

  question: string;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.refreshStoryline();
  }

  refreshStoryline() {
    this.adminService.getCurrentStoryline().subscribe(response => {
      if (response.status === 200) {
        this.question = response.storyline.question;
      }
    });
  }

}
