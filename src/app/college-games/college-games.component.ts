import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-game-schedule.com',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './college-games.component.html',
  styleUrls: ['./college-games.component.css']
})
export class CollegeGamesComponent {
  games = [
    { date: '08/31/2024 3:30', opponent: 'Akron'},
    { date: '09/07/2024 7:30', opponent: 'Western Michigan' },
    { date: '09/21/2024 TBA', opponent: 'Marshall' },
    { date: '09/28/2024 TBA', opponent: '@ Michigan State' },
    { date: '10/12/2024 TBA', opponent: '@ Oregon' },
    { date: '10/26/2024 TBA', opponent: 'Nebraska' },
    { date: '11/02/2024 TBA', opponent: 'Penn State' },
    { date: '11/09/2024 TBA', opponent: 'Purdue' },
    { date: '11/16/2024 TBA', opponent: '@ Northwestern' },
    { date: '11/21/2024 TBA', opponent: 'Indiana' },
    { date: '11/30/2024 12:00', opponent: '*ichigan' },
 
  ];

  foodSchedule = [
    { food: 'Pizza Burrito', cocktail: 'Bourbon with mixers'},
    { food: 'Quesadilla', cocktail: 'BYOB' },
    { food: 'TBD' },
    { food: 'TBD' },
    { food: 'TBD' },
    { food: 'TBD' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },
    { food: 'Closed for the season' },

    

  ];
}
