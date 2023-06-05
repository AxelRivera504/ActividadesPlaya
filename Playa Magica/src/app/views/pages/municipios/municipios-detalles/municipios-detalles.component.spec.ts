import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosDetallesComponent } from './municipios-detalles.component';

describe('MunicipiosDetallesComponent', () => {
  let component: MunicipiosDetallesComponent;
  let fixture: ComponentFixture<MunicipiosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipiosDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipiosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
