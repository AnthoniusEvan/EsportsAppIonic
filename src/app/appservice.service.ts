import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

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
    },
    {
      title: 'Mobile Legends',
      description: 'Mobile Legends: Bang Bang is a fast-paced multiplayer online battle arena (MOBA) game where players team up in 5v5 matches to destroy the enemy base while defending their own. Featuring a wide range of heroes with unique abilities, Mobile Legends focuses on strategic teamwork, quick reflexes, and tactical play in a competitive environment.',
      image: 'assets/mobile-legends.jpg'
    },
    {
      title: 'CS:GO',
      description: 'Counter-Strike: Global Offensive (CS:GO) is a tactical first-person shooter that pits teams of terrorists against counter-terrorists in objective-based game modes. With intense firefights, precision gunplay, and team strategy, CS:GO has become one of the most iconic esports titles, known for its high skill ceiling and competitive nature.',
      image: 'assets/csgo.jpeg'
    }
  ];

  achievements = [
    {
      game: "Valorant",
      year:{
        2022:["Victorious at Spring Championship Finals",
"Secured 3rd place at Summer Regional Cup",
"Reached semifinals at the Global Esports Masters",
"Won Fall International Tournament",
"Qualified for Winter Elite Series Playoffs",
"Finished as runner-up in the Esports Winter Invitational"],
        2023:["Won Spring Esports Pro Tournament",
"Secured 2nd place at Summer Global Championship",
"Champions of the Fall Regional Invitational",
"Top 4 finish at the International Masters Finals",
"Qualified for Winter Showdown"],
        2024:["Champions of the Spring Elite Invitational",
"Secured 2nd place in Summer Esports Open",
"Won Fall Regional Championship",
"Reached semifinals of the Global Masters Series",
"Qualified for Winter International Cup Finals"],
      },
    },
    {
      game: "PUBG",
      year:{
        2022:["Winners of the Spring Global Invitational",
"Secured 3rd place in the Summer Pro League",
"Reached semifinals in the Fall Championship",
"Champions of the Winter Elite Series",
"Top 4 finish in the International Masters"],
        2023:["Champions of the Spring Invitational Cup",
"Secured 2nd place at the Summer Pro League",
"Reached semifinals at the Fall Global Masters",
"Top 4 finish in the Winter Championship Finals",
"Qualified for the International Esports Tournament"],
        2024:["Winners of the Spring Global Pro League",
"Secured 2nd place in the Summer Invitational",
"Reached semifinals in the Fall Major Tournament",
"Champions of the Winter Elite Invitational",
"Top 4 finish in the International Masters Series"],
      },
    },
    {
      game: "Mobile Legends",
      year:{
        2022:["Champions of the Spring Pro League",
"Secured 2nd place at the Summer International Cup",
"Reached semifinals at the Fall Invitational Tournament",
"Champions of the Winter Global Masters",
"Top 4 finish in the International Championship Series"],
        2023:["Victorious at the Spring MPL Finals",
"Top 3 finish at the Summer Invitational Cup",
"Reached quarterfinals of the Global Pro Series",
"Champions of the Fall Regional Showdown",
"Qualified for the Winter Mobile Legends Masters"],
        2024:["Winners of the Spring MPL Invitational",
"Secured 2nd place at the Summer Regional Finals",
"Champions of the Fall International Tournament",
"Reached quarterfinals of the Global Elite Series",
"Top 4 finish in the Winter World Cup Finals"],
      },
    },
    {
      game: "CS:GO",
      year:{
        2022:["Winners of the Spring Major Tournament",
"Secured 2nd place at the Summer Invitational",
"Top 4 finish in the Fall Esports Pro League",
"Reached semifinals of the Global Masters",
"Champions of the Winter Showdown"],
        2023:["Champions of the Spring Invitational Cup",
"Secured 2nd place at the Summer Major Championship",
"Reached semifinals in the Fall Global Series",
"Top 4 finish in the Winter Pro League",
"Qualified for the Global Elite Finals"],
        2024:["Victorious at the Spring Major Championship",
"Secured 3rd place in the Summer Invitational Tournament",
"Champions of the Fall Global Masters",
"Reached quarterfinals in the Winter Pro League",
"Top 4 finish in the International Championship"],
      },
    },
  ]
  constructor() { }
}
