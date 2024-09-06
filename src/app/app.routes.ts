import { Routes } from '@angular/router';
import { ProfessionalGamesComponent } from './professional-games/professional-games.component';
import { CollegeGamesComponent } from './college-games/college-games.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'professional-games', component: ProfessionalGamesComponent },
  { path: 'college-games', component: CollegeGamesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];
