import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppetCombo } from './puppet-combo';

describe('PuppetCombo', () => {
  let component: PuppetCombo;
  let fixture: ComponentFixture<PuppetCombo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuppetCombo],
    }).compileComponents();

    fixture = TestBed.createComponent(PuppetCombo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
