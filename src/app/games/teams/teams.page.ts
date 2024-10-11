import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  index=0
  game:any
  teams:any[]=[]
  constructor(private route: ActivatedRoute, private appservice:AppserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.index=params['index']
      this.game = this.appservice.games[this.index]
      this.teams = Object.keys(this.appservice.teams[this.index].teams)
    })
  }

  getImg(): String{
    return "../../"+this.game.image
  }

}
