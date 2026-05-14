import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillasArt } from './chillas-art';

describe('ChillasArt', () => {
  let component: ChillasArt;
  let fixture: ComponentFixture<ChillasArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChillasArt],
    }).compileComponents();

    fixture = TestBed.createComponent(ChillasArt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
