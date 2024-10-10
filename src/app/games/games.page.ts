import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games:any[]=[]

  constructor(private appservice: AppserviceService) { }

  ngOnInit() {
    this.games=this.appservice.games
  }

}
