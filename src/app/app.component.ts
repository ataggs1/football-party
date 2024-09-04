import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CollegeGamesComponent } from "./college-games/college-games.component";
import{ProfessionalGamesComponent} from "./professional-games/professional-games.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive, CommonModule,CollegeGamesComponent,ProfessionalGamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-party-app';
}







