import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-about',
  template: `
    <h1>About</h1>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

constructor(private gameService: GamesService) { }



}
