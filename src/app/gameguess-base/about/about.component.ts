import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-about',
  template: `
    <button (click)="openPopup()">Open Popup</button>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

constructor(private gameService: GamesService) { }

  openPopup() {
    this.gameService.openPopup();
  }

}
