import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notificatons } from './notificatons';

describe('Notificatons', () => {
  let component: Notificatons;
  let fixture: ComponentFixture<Notificatons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notificatons],
    }).compileComponents();

    fixture = TestBed.createComponent(Notificatons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
