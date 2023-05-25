import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesDetallesComponent } from './direcciones-detalles.component';

describe('DireccionesDetallesComponent', () => {
  let component: DireccionesDetallesComponent;
  let fixture: ComponentFixture<DireccionesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionesDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
