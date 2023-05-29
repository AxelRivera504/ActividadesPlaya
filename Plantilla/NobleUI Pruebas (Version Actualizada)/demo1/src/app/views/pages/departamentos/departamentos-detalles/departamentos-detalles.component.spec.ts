import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosDetallesComponent } from './departamentos-detalles.component';

describe('DepartamentosDetallesComponent', () => {
  let component: DepartamentosDetallesComponent;
  let fixture: ComponentFixture<DepartamentosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentosDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
