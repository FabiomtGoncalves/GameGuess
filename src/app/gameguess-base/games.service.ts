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
  rndNum: number = 0;
  public username : string = "Fábio";
  public soundSetting: string = "ON";

  constructor(private http: HttpClient, private dialog: MatDialog) { 
    this.http.get('assets/games.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.gameArray.push(new Game(row[0], row[1], row[2], row[3], row[4], row[7], row[8]));
            }
            console.log(this.gameArray);
            this.rndNum = Math.floor(Math.random() * this.gameArray.length-1);
            console.log("random val:" + Math.floor(Math.random() * this.gameArray.length-1));
            this.rndGame = this.gameArray[this.rndNum];
            console.log("RND GAME: " + this.rndGame.id);
            console.log("LENGHT: " + csvToRowArray.length
            );
        },
        error => {
            console.log(error);
        }
    );
  }

  openPopup() {
    this.dialog.open(AboutComponent);
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