import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { routes } from './app.routes';


@Component({
  selector: 'app-professional-games',
  templateUrl: './professional-games/professional-games.component.html',
  styles: []
})
export class ProfessionalGamesComponent {
  foodSchedule: any;

}

@Component({
  selector: 'app-college-games',
  template: './college-games/college-games.component.html',
  styles: []
})
export class CollegeGamesComponent {
  foodSchedule: any;
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
