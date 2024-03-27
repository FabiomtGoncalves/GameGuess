import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { GameComponent } from '../game/game.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrl: './gameover.component.css'
})
export class GameoverComponent {

  dialogRef: MatDialog | undefined;
  _game: GameComponent;
  leaderboardSuccess: string = "";

  constructor(public _gamesService: GamesService, public dialog: MatDialog) {
    this.dialogRef = dialog;
    this._game = new GameComponent(this._gamesService, this.dialogRef);
  }

  shareLeaderboard(){
    this._game.btnLeaderboard = true;
    //this.leaderboardSuccess = "Your score was shared on the leaderboard!"
    this.leaderboardSuccess = "Leaderboard currently unavailable."
  }

  newGame(){
    this._gamesService.newGame();
    this.dialog.closeAll();
  }

}
