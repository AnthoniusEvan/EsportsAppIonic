import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games = [
    {
      title: 'Valorant',
      description: 'Valorant is an online multiplayer computer game, produced by Riot Games. It is a first-person shooter game, consisting of two teams of five, where one team attacks and the other defends.',
      image: 'assets/valorant.jpg'
    },
    {
      title: 'PUBG',
      description: 'PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.',
      image: 'assets/pubg.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
