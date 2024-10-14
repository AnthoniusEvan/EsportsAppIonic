import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  teams: any[] = []; // Stores all teams
  selectedTeam: any; // Stores the selected team's players
  game: string = ''; // Stores the game name
  teamName: string = ''; // Stores the team name
  index = -1;
  teamIndex = -1;

  constructor(private route: ActivatedRoute, private gameService: AppserviceService) {}

  ngOnInit() {
    // Fetching parameters from the route
    this.route.params.subscribe((params) => {
      this.index = params['index'];
      this.teamIndex = params['teamIndex'];

      // Get the game teams from the service
      if (this.index !== -1 && this.teamIndex !== -1) {
        const gameTeams = this.gameService.teams[this.index];
        
        // Retrieve the specific team
        const teamKeys = Object.keys(gameTeams.teams);
this.teamName = teamKeys[this.teamIndex];
this.selectedTeam = (gameTeams.teams as any)[this.teamName]; // Casting as 'any'

        this.game = gameTeams.game; // Get the game name
      }
    });
  }

}
