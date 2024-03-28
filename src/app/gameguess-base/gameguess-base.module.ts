import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameComponent } from './game/game.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatComponent } from './chat/chat.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { GameoverComponent } from './gameover/gameover.component';
import { GamePopupComponent } from './game-popup/game-popup.component';

@NgModule({
  declarations: [
    GameComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ChatComponent,
    LeaderboardComponent,
    AboutComponent,
    GameoverComponent,
    GamePopupComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatRadioModule,
    BrowserModule,
  ],
  exports: [
    GameComponent,
    NavbarComponent,
  ]
})
export class GameguessBaseModule { }
