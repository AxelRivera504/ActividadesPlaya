import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesDetallesComponent } from './roles.details.component';

describe('UsuariosDetallesComponent', () => {
  let component: RolesDetallesComponent;
  let fixture: ComponentFixture<RolesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});