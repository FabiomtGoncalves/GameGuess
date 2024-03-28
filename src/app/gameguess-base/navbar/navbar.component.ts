import { Component, TemplateRef, ViewChild } from '@angular/core';
import { GamesService } from '../games.service';
import { MatDialog } from '@angular/material/dialog';
import { UsernamepopupComponent } from '../usernamepopup/usernamepopup.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  logoPath: string = "assets/controller.png";
  leaderboardPath: string = "assets/trophy.png";
  aboutPath: string = "assets/question_mark.png";
  settings: string = "assets/settings.png";

  cool: string = "assets/cool.png";
  soundOn: string = "assets/sound-on.png";
  soundMute: string = "assets/sound-mute.png";

  github: string = "assets/github.png";
  githubUrl: string = "https://github.com/FabiomtGoncalves/GameGuess";


  constructor(public _gameService : GamesService, private dialog: MatDialog) { 
    this.usernameCheck();
  }

  @ViewChild('secondDialog', { static: true })
  secondDialog!: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
  
  usernameCheck(){
    if(this._gameService.username.trim() == ""){
      this.dialog.open(UsernamepopupComponent, {
        disableClose: true,
      });
    }
  }

}
