import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {

  filteredLeaderboard: Leaderboard[] = [];

  public leaderboardArray: Leaderboard[] = [];

  first: string = "assets/first.png";
  second: string = "assets/second.png";
  third: string = "assets/third.png";

  constructor(private http: HttpClient) { 
    this.readCSV();
    this.filteredLeaderboard = this.leaderboardArray;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLeaderboard = this.leaderboardArray;
      return;
    }
  
    this.filteredLeaderboard = this.leaderboardArray.filter(
      userLocation => userLocation.user.toLowerCase().includes(text.toLowerCase())
    );
  }

  readCSV(){
    this.http.get('assets/data/leaderboard.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row: string[] = [];
              row = csvToRowArray[index].split(",");
              this.leaderboardArray.push(new Leaderboard(row[0], parseInt(row[1])));
            }
            this.leaderboardArray.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0))
        },
        error => {
            console.log(error);
        }
    );
  }


  writeToSCSV(){
  }

}


export class Leaderboard{
  user: String;
  score: Number;

  constructor(user: String, score: Number){
    this.user = user;
    this.score = score;
  }
}
