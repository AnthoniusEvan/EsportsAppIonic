import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  schedule = [
    {
      date: '20 SEP',
      event: 'Regional Qualifier - Valorant',
      team: 'Void Runners',
      image: 'assets/valorant.jpg'
    },
    {
      date: '20 SEP',
      event: 'Regional Qualifier - Valorant',
      team: 'Void Runners',
      image: 'assets/valorant.jpg'
    },
    {
      date: '20 SEP',
      event: 'Regional Qualifier - Valorant',
      team: 'Void Runners',
      image: 'assets/valorant.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
