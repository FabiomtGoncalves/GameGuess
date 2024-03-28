import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-usernamepopup',
  templateUrl: './usernamepopup.component.html',
  styleUrl: './usernamepopup.component.css'
})
export class UsernamepopupComponent {

  msgError: string = "";

  constructor(public _gamesService: GamesService, public dialog: MatDialog) { }

  usernameCheck(){
    if(this._gamesService.username.trim() == ""){
      //window.alert("Please enter a username");
      this.msgError = "Username can't be empty";
    } else if (this._gamesService.username.length >= 10){
      this.msgError = "Username can't be longer than 10 characters";
    } else{
      //console.log("Username: " + this._gamesService.username);
      this.dialog.closeAll();
    }
  }

}
