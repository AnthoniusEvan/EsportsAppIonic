import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  scheduless = [
    {
      date: '20 SEP',
      event: 'Regional Qualifier - Valorant',
      team: 'Void Runners',
      image: 'valorant.jpg',
      description: 'The Void Runners take on the competition in the Regional Qualifier for Valorant. Expect fast-paced action and intense strategy in this highly anticipated match.'
    },
    {
      date: '21 SEP',
      event: 'Regional Qualifier - PUBG',
      team: 'Night Stalkers',
      image: 'pubg.jpg',
      description: 'Night Stalkers gear up for battle in the PUBG Regional Qualifier. With their expert survival tactics, they’re ready to dominate the battlegrounds.'
    },
    {
      date: '22 SEP',
      event: 'Regional Qualifier - CS:GO',
      team: 'Sharpshooters',
      image: 'csgo.jpeg',
      description: 'Sharpshooters bring their precision and teamwork to the CS:GO Regional Qualifier. Watch as they showcase their elite skills in one of the most competitive esports games.'
    }
  ];
  constructor() { }
}
