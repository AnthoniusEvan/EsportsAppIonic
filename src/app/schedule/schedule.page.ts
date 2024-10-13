import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

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
      date: '21 SEP',
      event: 'Regional Qualifier - PUBG',
      team: 'Night Stalkers',
      image: 'assets/pubg.jpg'
    },
    {
      date: '22 SEP',
      event: 'Regional Qualifier - CS:GO',
      team: 'Sharpshooters',
      image: 'assets/csgo.jpeg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetails(item: { date: any; event: any; team: any; image: any; }) {
    this.router.navigate(['/schedule-details'], {
      queryParams: {
        date: item.date,
        event: item.event,
        team: item.team,
        image: item.image
      }
    });
  }
}
