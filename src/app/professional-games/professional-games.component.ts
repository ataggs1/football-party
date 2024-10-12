import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';


@Component({
  selector: 'app-game-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-games.component.html',
  styleUrls: ['./professional-games.component.css']
})
export class ProfessionalGamesComponent {
  games = [
    { date: '09/08/2024 4:25', opponent: 'Dallas Cowboys' },
    { date: '09/15/2024 1:00', opponent: '@ Jackonsonville Jaguars' },
    { date: '09/22/2024 1:00', opponent: 'New York Giants' },
    { date: '09/29/2024 4:25', opponent: '@ Las Vegas Raiders ' },
    { date: '10/06/2024 1:00', opponent: '@ Washington Commanders' },
    { date: '10/13/2024 1:00', opponent: '@ Philadelphia Eagles' },
    { date: '10/20/2024 1:00', opponent: 'Cincinnati Bengals' },
    { date: '10/27/2024 1:00', opponent: 'Baltimore Ravens' },
    { date: '11/03/2024 1:00', opponent: 'Los Angeles Charger' },
    { date: '11/17/2024 1:00', opponent: '@ New Orleans Saints' },
    { date: '11/21/2024 8:15', opponent: 'Pittsburgh Steelers' },
    { date: '12/02/2024 8:15', opponent: '@ Denver Broncos' },
    { date: '12/08/2024 1:00', opponent: '@ Pittsburgh Steelers' },
    { date: '12/15/2024 1:00', opponent: 'Kansas City Chiefs' },
    { date: '12/19/2024 8:15', opponent: '@ Cincinnati Bengals' },
    { date: '12/29/2024 8:20', opponent: 'Miami Dolphins' },
    { date: '01/05/2025 TBD', opponent: '@ Baltimore Ravens' }
  ];

  foodSchedule = [
    { food: 'Smashburgers', cocktail: 'Tequila with mixers'},
    { food: 'Meatball Subs', cocktail: 'Celebrity Guest Chef Todd Beljan'},
    { food: '', cocktail: '' },
    { food: 'Celebrity Guest Chef Marc Craig', cocktail: 'Chicken Wings and Pizza' },
    { food: 'Celebrity Guest Chef Marc Craig', cocktail: 'Pulled Pork'},
    { food: 'French Toast', cocktail: 'Mimosas' },
    { food: 'TBD', cocktail: '' },
    { food: 'TBD' , cocktail: ''},
    { food: 'Closed for the season', cocktail: '' },
    { food: 'Closed for the season' , cocktail: ''},
    { food: 'Closed for the season' , cocktail: ''},
    { food: 'Closed for the season', cocktail: '' },
    { food: 'Closed for the season' , cocktail: ''},
    { food: 'Closed for the season' , cocktail: ''},
    { food: 'Closed for the season' , cocktail: ''},
    { food: 'Closed for the season' , cocktail: ''},
    { food: 'Closed for the season' , cocktail: ''},

    

  ];
}