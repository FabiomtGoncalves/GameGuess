import { Component, input } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  imagePath: string = "assets/retrogaming-bg.png";
  ratingStar: string = "assets/star.png";
  date: string = "assets/clock.png";
  glitchPath: string = "assets/static.gif";

  wrongSound: string = "assets/sounds/wrong-sound.mp3";
  rightSound: string = "assets/sounds/right-sound.mp3";

  hideGameInfo: boolean = false;

  letterGuess: string = "";

  wrongLetters: string[] = [];

  indexNum: number[] = []

  win:string = "";

  constructor(public _gamesService: GamesService) {
    
   }

  playSound(guess: string){
    if (guess == "right"){
      this.playAudio(this.rightSound);
      this.glitchPath="assets/right.png"
      this.hideGameInfo = true;
        setInterval(() => {
          this.glitchPath="assets/static.gif"
          this.hideGameInfo = false;
        }, 2000);
    } else{
      this.playAudio(this.wrongSound);
      this.glitchPath="assets/wrong.png"
      this.hideGameInfo = true;
        setInterval(() => {
          this.glitchPath="assets/static.gif"
          this.hideGameInfo = false;
        }, 2000);
    }
    
  }

  playAudio(audioLink: string){
    if(this._gamesService.soundSetting == "ON"){
      let audio = new Audio();
      audio.src = audioLink;
      audio.load();
      audio.play();
    }
  }

  onSubmitLetter(){
    console.log(this.letterGuess);
    const lowercaseGameChars = this._gamesService.gameChars.map(char => char.toLowerCase());
    if(this.letterGuess.trim() == ""){
      window.alert("Please enter a letter.");
    } else{
      if(lowercaseGameChars.includes(this.letterGuess)){
        let indexes = lowercaseGameChars.map((elm, idx) => elm == this.letterGuess ? idx : '').filter(String);
  
        for(let i = 0; i < indexes.length; i++){
          let index = String(indexes[i]);
          this._gamesService.rightLetters[parseInt(index)] = this.letterGuess;
        }
  
        if(this._gamesService.rightLetters.toString() == lowercaseGameChars.toString()){
          this.win = "You Win!";
        }
  
        this.playSound("right");
  
      } else {
        this.playSound("wrong");
        this.wrongLetters.push(" " + this.letterGuess);
      }
    }
    

    this.letterGuess = "";

  }
  

}

