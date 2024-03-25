import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from "./about/about.component";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public gameArray: Game[] = [];

  public rndGame: Game = new Game("", "", "", "", "", "", "");
  public rightLetters: string[] = [];
  public wrongLetters: string[] = [];

  public gameChars: string[] = [];
  rndNum: number = 0;
  public username : string = "<User>";
  public soundSetting: string = "ON";

  public spaces: number[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) { 
    this.http.get('assets/data/games.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.gameArray.push(new Game(row[0], row[1], row[2], row[3], row[4], row[7], row[8]));
            }
            //console.log(this.gameArray);
            this.rndNum = Math.floor(Math.random() * this.gameArray.length-1);
            this.rndGame = this.gameArray[this.rndNum];
            var spacesCount = this.rndGame.title.replace(/\W/g, " ").split("");
            this.gameChars = this.rndGame.title.replace(/\W/g, "").split("");
            //console.log("GAME CHARS: " + this.gameChars);

            let indexes = spacesCount.map((elm, idx) => elm == " " ? idx : '').filter(String);
  
            for(let i = 0; i < indexes.length; i++){
              let index = String(indexes[i]);
              this.spaces.push(parseInt(index));
              //console.log("SPACES ARRAY: " + this.spaces);
              //this._gamesService.rightLetters[parseInt(index)] = this.letterGuess;
            }

            for(let i = 0; i < this.gameChars.length; i++){
              this.rightLetters.push("?");
            }
        },
        error => {
            console.log(error);
        }
    );
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