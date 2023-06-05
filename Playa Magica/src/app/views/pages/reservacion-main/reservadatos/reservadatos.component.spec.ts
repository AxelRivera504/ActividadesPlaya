import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservadatosComponent } from './reservadatos.component';

describe('ReservadatosComponent', () => {
  let component: ReservadatosComponent;
  let fixture: ComponentFixture<ReservadatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservadatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservadatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
