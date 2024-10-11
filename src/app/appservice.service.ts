import { Injectable } from '@angular/core';



export class Player {
  public name: string
  public role: string

  public constructor(name: string, role:string) {
    this.name = name
    this.role = role
  }
}

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

  teams = [
    {
      game: "Valorant",
      teams:  {
        "Team Phantom":[new Player("Blaze", "Duelist"), new Player("Shade", "Controller"), new Player("Horizon", "Initiator"), new Player("Viper", "Controller"), new Player("Striker", "Sentinel")],
        "Shadow Reapers":[new Player("Phantom", "Duelist"), new Player("Smoke", "Controller"), new Player("Wave", "Initiator"), new Player("Venom", "Controller"), new Player("Sniper", "Sentinel")],
        "Cyber Knights":[new Player("Falcon", "Duelist"), new Player("Tempest", "Controller"), new Player("Echo", "Initiator"), new Player("Poison", "Controller"), new Player("Guardian", "Sentinel")],
        "Quantum Force":[new Player("Nova", "Duelist"), new Player("Mist", "Controller"), new Player("Radar", "Initiator"), new Player("Toxin", "Controller"), new Player("Defender", "Sentinel")],
        "Vortex Elite":[new Player("Blitz", "Duelist"), new Player("Storm", "Controller"), new Player("Scout", "Initiator"), new Player("Venus", "Controller"), new Player("Protector", "Sentinel")]
      }
    },
    {
      game:"PUBG",
      teams:{
        "Alpha Hunters":[new Player("Stryker", "Scout"), new Player("Hawk", "Sniper"), new Player("Ghost", "Support"), new Player("Blaze", "Fragger"), new Player("Tank", "Leader")],
        "Omega Squad":[new Player("Wolf", "Scout"), new Player("Sniper", "Sniper"), new Player("Specter", "Support"), new Player("Rage", "Fragger"), new Player("Commander", "Leader")],
        "Night Raiders":[new Player("Falcon", "Scout"), new Player("Eagle", "Sniper"), new Player("Stealth", "Support"), new Player("Crusher", "Fragger"), new Player("Chief", "Leader")],
        "Steel Wolves":[new Player("Hunter", "Scout"), new Player("Raven", "Sniper"), new Player("Shadow", "Support"), new Player("Viper", "Fragger"), new Player("Sarge", "Leader")],
        "Predator Clan":[new Player("Tiger", "Scout"), new Player("Hawkeye", "Sniper"), new Player("Phantom", "Support"), new Player("Inferno", "Fragger"), new Player("Alpha", "Leader")]
      }
    },
    {
      game:"Mobile Legends",
      teams:{
        "Legends United":[new Player("Cyclone", "Tank"), new Player("Flare", "Mage"), new Player("Warrior", "Fighter"), new Player("Rogue", "Assassin"), new Player("Luna", "Marksman")],
        "Dragon Kings":[new Player("Titan", "Tank"), new Player("Flame", "Mage"), new Player("Crusher", "Fighter"), new Player("Shade", "Assassin"), new Player("Arrow", "Marksman")],
        "Phoenix Warriors":[new Player("Rock", "Tank"), new Player("Inferno", "Mage"), new Player("Berserker", "Fighter"), new Player("Phantom", "Assassin"), new Player("Hawk", "Marksman")],
        "Divine Blades":[new Player("Steel", "Tank"), new Player("Ember", "Mage"), new Player("Knight", "Fighter"), new Player("Nightmare", "Assassin"), new Player("Sniper", "Marksman")],
        "Shadow Slayers":[new Player("Bulwark", "Tank"), new Player("Spark", "Mage"), new Player("Gladiator", "Fighter"), new Player("Specter", "Assassin"), new Player("Longshot", "Marksman")]
      }
    },
    {
      game:"CS:GO",
      teams:{
        "Strike Force":[new Player("Bullet", "AWPer"), new Player("Ghost", "Entry Fragger"), new Player("Titan", "Lurker"), new Player("Havoc", "Rifler"), new Player("Falcon", "In-Game Leader")],
        "Echo Squad":[new Player("Sniper", "AWPer"), new Player("Blaze", "Entry Fragger"), new Player("Tank", "Lurker"), new Player("Striker", "Rifler"), new Player("Commander", "In-Game Leader")],
        "Elite Tacticians":[new Player("Hawkeye", "AWPer"), new Player("Rogue", "Entry Fragger"), new Player("Crusher", "Lurker"), new Player("Sabre", "Rifler"), new Player("General", "In-Game Leader")],
        "Vanguard":[new Player("Viper", "AWPer"), new Player("Shade", "Entry Fragger"), new Player("Wraith", "Lurker"), new Player("Blitz", "Rifler"), new Player("Captain", "In-Game Leader")],
        "Fury Squad":[new Player("Eagle", "AWPer"), new Player("Inferno", "Entry Fragger"), new Player("Ghost", "Lurker"), new Player("Storm", "Rifler"), new Player("Leader", "In-Game Leader")]
      }
    }
  ]
  constructor() { }
}
