import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raju } from './raju';

describe('Raju', () => {
  let component: Raju;
  let fixture: ComponentFixture<Raju>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raju]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raju);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
