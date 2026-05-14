import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixOneSixGames } from './six-one-six-games';

describe('SixOneSixGames', () => {
  let component: SixOneSixGames;
  let fixture: ComponentFixture<SixOneSixGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixOneSixGames],
    }).compileComponents();

    fixture = TestBed.createComponent(SixOneSixGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
