import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionEditComponent } from './reservacion-edit.component';

describe('ReservacionEditComponent', () => {
  let component: ReservacionEditComponent;
  let fixture: ComponentFixture<ReservacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
