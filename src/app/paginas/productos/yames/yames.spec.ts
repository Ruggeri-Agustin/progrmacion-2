import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yames } from './yames';

describe('Yames', () => {
  let component: Yames;
  let fixture: ComponentFixture<Yames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yames],
    }).compileComponents();

    fixture = TestBed.createComponent(Yames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
