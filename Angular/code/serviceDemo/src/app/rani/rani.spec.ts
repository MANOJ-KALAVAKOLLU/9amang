import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rani } from './rani';

describe('Rani', () => {
  let component: Rani;
  let fixture: ComponentFixture<Rani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rani]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rani);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
