import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposDetallesComponent } from './equipos-detalles.component';

describe('EquiposDetallesComponent', () => {
  let component: EquiposDetallesComponent;
  let fixture: ComponentFixture<EquiposDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
