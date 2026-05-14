import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmikaGames } from './emika-games';

describe('EmikaGames', () => {
  let component: EmikaGames;
  let fixture: ComponentFixture<EmikaGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmikaGames],
    }).compileComponents();

    fixture = TestBed.createComponent(EmikaGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
