import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  index=0
  game:any
  achievements:any[]=[]
  selected_year=""
  
  years:any[]=[]

  constructor(private route: ActivatedRoute, private appservice:AppserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.index=params['index']
      this.game = this.appservice.games[this.index]
      this.achievements = this.appservice.achievements
      this.years = Object.keys(this.achievements[this.index].year)
    })
  }

  getImg(): String{
    return "../../"+this.game.image
  }

  getFeats(): string[]{
    if (this.selected_year=="all"){
      const allAchievements: string[] = [];

      const yearAchievements = this.achievements[this.index].year
      for (let y in yearAchievements) {
        for (let feat in yearAchievements[y]){
          allAchievements.push(yearAchievements[y][feat]);
        }
      }
      return allAchievements
    }
    else{
      return this.achievements[this.index].year[this.selected_year]
    }
  }
}
