import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { MatDialog } from '@angular/material/dialog'; 
import { GameoverComponent } from '../gameover/gameover.component';
import { GamePopupComponent } from '../game-popup/game-popup.component';


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
  reviews: string = "assets/reviews.png";
  help: string = "assets/question_mark.png";
  enter: string = "assets/enter_key.png";

  wrongSound: string = "assets/sounds/wrong-sound.mp3";
  rightSound: string = "assets/sounds/right-sound.mp3";
  loosingSound: string = "assets/sounds/loosing-sound.mp3";

  health: string = "assets/health.png";

  hideGameInfo: boolean = false;

  letterGuess: string = "";

  btnLeaderboard: boolean = false;


  constructor(public _gamesService: GamesService, private dialogRef: MatDialog) { }

  openDialog(){
    this.dialogRef.open(GameoverComponent, {
      disableClose: true,
    });
  }

  openDialogReviews(){
    this._gamesService.popup = "reviews";
    this.dialogRef.open(GamePopupComponent, {
      width: '50%',
      height: '50%',
    });
  }

  openDialogHelp(){
    this._gamesService.popup = "help";
    this.dialogRef.open(GamePopupComponent, {
    });
  }


  playAudio(audioLink: string){
    if(this._gamesService.soundSetting == "ON"){
      let audio = new Audio();
      audio.src = audioLink;
      audio.load();
      audio.play();
    }
  }

  playSound(guess: string){
    switch(guess){
      case "right":
        this.playAudio(this.rightSound);
        this.glitchPath="assets/right.png"
        this.hideGameInfo = true;
        setInterval(() => {
          this.glitchPath="assets/static.gif"
          this.hideGameInfo = false;
        }, 2000);
        break;
      case "wrong":
        this.playAudio(this.wrongSound);
        this.glitchPath="assets/wrong.png"
        this.hideGameInfo = true;
        setInterval(() => {
          this.glitchPath="assets/static.gif"
          this.hideGameInfo = false;
        }, 2000);
        break;
      case "loosing":
        this.playAudio(this.loosingSound);
        break;
    }
    
  }


  onSubmitLetter(){

    //console.log(this.letterGuess);
    const lowercaseGameChars = this._gamesService.gameChars.map(char => char.toUpperCase());

    if(this.letterGuess.trim() == ""){
      window.alert("Please enter a letter.");

    } else if (this._gamesService.rightLetters.includes(this.letterGuess) || this._gamesService.wrongLetters.includes(" " + this.letterGuess)){
      window.alert("You already guessed this letter.");

    } else{
      if(lowercaseGameChars.includes(this.letterGuess)){
        let indexes = lowercaseGameChars.map((elm, idx) => elm == this.letterGuess ? idx : '').filter(String);
  
        for(let i = 0; i < indexes.length; i++){
          let index = String(indexes[i]);
          this._gamesService.rightLetters[parseInt(index)] = this.letterGuess;
        }
  
        if(this._gamesService.rightLetters.toString() == lowercaseGameChars.toString()){
          //this.win = "You Win!";
          this._gamesService.score += 1;
          this._gamesService.nextGame();
        }
  
        this.playSound("right");  


      } else {

        if(this._gamesService.lives <= 0){
          this.btnLeaderboard = false;
          this.openDialog();
          this.playSound("loosing");

        } else{
          this.playSound("wrong");
          this._gamesService.lives -= 1;
          this._gamesService.wrongLetters.push(" " + this.letterGuess);
        }

      }
    }

    this.letterGuess = "";

  }
  

}

