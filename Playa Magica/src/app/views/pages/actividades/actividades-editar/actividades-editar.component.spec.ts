import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesEditarComponent } from './actividades-editar.component';

describe('ActividadesEditarComponent', () => {
  let component: ActividadesEditarComponent;
  let fixture: ComponentFixture<ActividadesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
