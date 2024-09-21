import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'whoweare',
    loadChildren: () => import('./whoweare/whoweare.module').then( m => m.WhowearePageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('../schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('../games/games.module').then( m => m.GamesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
