import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortureStar } from './torture-star';

describe('TortureStar', () => {
  let component: TortureStar;
  let fixture: ComponentFixture<TortureStar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TortureStar],
    }).compileComponents();

    fixture = TestBed.createComponent(TortureStar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
