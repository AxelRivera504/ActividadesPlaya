import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetallesComponent } from './usuarios-detalles.component';

describe('UsuariosDetallesComponent', () => {
  let component: UsuariosDetallesComponent;
  let fixture: ComponentFixture<UsuariosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
