import { Routes } from '@angular/router';
import { ProfessionalGamesComponent } from './professional-games/professional-games.component';
import { CollegeGamesComponent } from './college-games/college-games.component';


export const routes: Routes = [

  { path: 'professional-games', component: ProfessionalGamesComponent },
  { path: 'college-games', component: CollegeGamesComponent },
  { path: '', redirectTo: '/professional-games', pathMatch: 'full' } // Default route
];
