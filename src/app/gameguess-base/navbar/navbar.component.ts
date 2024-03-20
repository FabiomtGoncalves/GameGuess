import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  logoPath: string = "assets/controller.png";
  leaderboardPath: string = "assets/trophy.png";
  aboutPath: string = "assets/question_mark.png";
  cool: string = "assets/cool.png";

  constructor(public _gameService : GamesService) { }

}
