import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  index= 0;
  teamData: any;
  
  constructor(private route: ActivatedRoute, private appservice:AppserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.teamData = this.appservice.teams[this.index];
    })
  }
}
