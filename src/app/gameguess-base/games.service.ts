import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public gameArray: Game[] = [];
  public gameArrayCopy: Game[] = [];

  public rndGame: Game = new Game("", "", "", "", "", "", "");
  public rightLetters: string[] = [];
  public wrongLetters: string[] = [];

  public gameChars: string[] = [];
  private rndNum: number = 0;
  public username : string = "<User>";
  public soundSetting: string = "ON";

  public spaces: number[] = [];

  public lives: number = 3;
  public score: number = 0;

  constructor(private http: HttpClient) { 
    this.readCSV();
  }


  readCSV(){
    this.http.get('assets/data/games.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.gameArray.push(new Game(row[0], row[1], row[2], row[3], row[4], row[7], row[8]));
            }
            //console.log(this.gameArray);
            //this.setup();
            this.newGame();
        },
        error => {
            console.log(error);
        }
    );
  }


  newGame(){
    this.score = 0;
    this.resetValues();
    this.gameArrayCopy = this.gameArray;
    this.setup();
  }

  setup(){
    this.randomNumber();
    this.rndGame = this.gameArrayCopy[this.rndNum];
    var spacesCount = this.rndGame.title.replace(/\W/g, " ").split("");
    this.gameChars = this.rndGame.title.replace(/\W/g, "").split("");

    let indexes = spacesCount.map((elm, idx) => elm == " " ? idx : '').filter(String);

    var subtract = 0;
  
    for(let i = 0; i < indexes.length; i++){
      this.spaces.push(parseInt(String(indexes[i]))-subtract);
      subtract += 1;
    }

    for(let i = 0; i < this.gameChars.length; i++){
      this.rightLetters.push("?");
    }
  }


  nextGame(){
    this.resetValues();
    this.gameArrayCopy.splice(this.rndNum, 1);
    this.setup();
  }


  resetValues(){
    //this.gameArray = [];     SO DA RESET QUANDO SE PERDER OU REINICIAR
    this.rndGame = new Game("", "", "", "", "", "", "");
    this.gameChars = [];
    this.rightLetters  = [];
    this.wrongLetters = [];
    this.spaces = [];
    this.lives = 3;
  }


  randomNumber(){
    return this.rndNum = Math.floor(Math.random() * this.gameArrayCopy.length-1);
  }


}

export class Game{
  id: String;
  title: String;
  releaseDate: String;
  team: String;
  rating: String;
  genre: String;
  reviews: String;

  constructor(id: String, title: String, releaseDate: String, team: String, rating: String, genre: String, reviews: String){
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.team = team;
    this.rating = rating;
    this.genre = genre;
    this.reviews = reviews;
  }

  
}