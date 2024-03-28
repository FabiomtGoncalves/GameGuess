import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-popup',
  templateUrl: './game-popup.component.html',
  styleUrl: './game-popup.component.css'
})
export class GamePopupComponent {

  constructor(public _gamesService: GamesService, public dialog: MatDialog) { }

  ratingStar: string = "assets/star.png";
  date: string = "assets/clock.png";
  reviews: string = "assets/reviews.png";

  close(){
    this.dialog.closeAll();
  }

}
