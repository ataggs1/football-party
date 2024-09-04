import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeGamesComponent } from './college-games.component';

describe('CollegeGamesComponent', () => {
  let component: CollegeGamesComponent;
  let fixture: ComponentFixture<CollegeGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
