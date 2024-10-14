import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'teams/:index',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'achievement/:index',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  {
    path: 'team-details',
    loadChildren: () => import('./team-details/team-details.module').then( m => m.TeamDetailsPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
