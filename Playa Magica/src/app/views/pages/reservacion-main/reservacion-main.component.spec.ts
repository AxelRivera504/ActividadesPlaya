import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionMainComponent } from './reservacion-main.component';

describe('ReservacionMainComponent', () => {
  let component: ReservacionMainComponent;
  let fixture: ComponentFixture<ReservacionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
