import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  usersCount: Number;
  teamsCount: Number;
  investedCount: Number;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.updateUsersCount();
    this.updateTeamsCount();
    this.updateInvestedCount();
  }

  updateUsersCount() {
    this.adminService.getUsersCount().subscribe(response => {
     if (response.status === 200) {
       this.usersCount = response.count;
     }
   });
 }

 updateTeamsCount() {
  this.adminService.getTeamsCount().subscribe(response => {
   if (response.status === 200) {
     this.teamsCount = response.count;
   }
 });
}

updateInvestedCount() {
  this.adminService.getInvestedCount().subscribe(response => {
   if (response.status === 200) {
     this.investedCount = response.count;
   }
 });
}

 deleteAllUsers() {
  if (confirm('Delete all users?')) {
    this.adminService.deleteAllUsers().subscribe(response => {
      if (response.status === 201) {
        this.updateUsersCount();
      }
    });
  }
 }

 deleteAllTeams() {
  if (confirm('Delete all teams?')) {
    this.adminService.deleteAllTeams().subscribe(response => {
      if (response.status === 201) {
        this.updateTeamsCount();
      }
    });
  }
 }

}
