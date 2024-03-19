import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './gameguess-base/game/game.component';
import { PageNotFoundComponent } from './gameguess-base/page-not-found/page-not-found.component';
import { LeaderboardComponent } from './gameguess-base/leaderboard/leaderboard.component';
import { AboutComponent } from './gameguess-base/about/about.component';

const routes: Routes = [
  {
    path: '', 
    component: GameComponent
  },
  {
    path: 'leaderboard', 
    component: LeaderboardComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
