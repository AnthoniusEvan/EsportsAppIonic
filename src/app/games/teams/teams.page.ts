import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  constructor(private route: ActivatedRoute, private appservice:AppserviceService, private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.index=params['index']
      this.game = this.appservice.games[this.index]
      this.teams = Object.keys(this.appservice.teams[this.index].teams)
    })
  }
  goToTeamMember(teamIndex: number){
    this.navCtrl.navigateForward(`/team-details/${this.index}/${teamIndex}`);
  }
  getImg(): String{
    return "../../"+this.game.image
  }

}
