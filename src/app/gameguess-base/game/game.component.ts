import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  imagePath: string = "assets/retrogaming-bg.png";
  ratingStar: string = "assets/star.png";
  glitchPath: string = "assets/static.gif";
  wrongSound: string = "assets/wrong-sound.mp3";
  rightSound: string = "assets/static.gif";

  hideGameInfo: boolean = false;

  constructor(public _gamesService: GamesService){
  }

  checkLetter(){
    this.playAudio(this.wrongSound);
    this.glitchPath="assets/wrong.png"
    this.hideGameInfo = true;
      setInterval(() => {
        this.glitchPath="assets/static.gif"
        this.hideGameInfo = false;
      }, 2000);
  }

  playAudio(audioLink: string){
    let audio = new Audio();
    audio.src = audioLink;
    audio.load();
    audio.play();
  }

}

