import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {


  constructor(private router: Router, private scheduleService:ScheduleService) { }
  
  scheduless:any[]= []
  ngOnInit() {
    this.scheduless=this.scheduleService.scheduless;
  }

  
}
