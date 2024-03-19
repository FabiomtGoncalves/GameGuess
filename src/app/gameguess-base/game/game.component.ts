import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  
  public userArray: Game[] = [];
  constructor(private http: HttpClient){
    this.http.get('assets/steam.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new Game(parseInt( row[0], 10), row[1], row[2].trim(), row[4], row[5]));
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }
  
}

export class Game{
  appid: number;
  name: String;
  releaseDate: String;
  developer: String;
  publisher: String;

  constructor(id: number, name: String, lastName: String, developer: String, publisher: String){
    this.appid = id;
    this.name = name;
    this.releaseDate = lastName;
    this.developer = developer;
    this.publisher = publisher;
  }
}