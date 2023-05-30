import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesMainComponent } from './reservaciones-main.component';

describe('ReservacionesMainComponent', () => {
  let component: ReservacionesMainComponent;
  let fixture: ComponentFixture<ReservacionesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionesMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
