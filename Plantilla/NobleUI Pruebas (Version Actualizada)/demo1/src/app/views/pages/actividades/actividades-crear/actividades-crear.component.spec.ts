import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCrearComponent } from './actividades-crear.component';

describe('ActividadesCrearComponent', () => {
  let component: ActividadesCrearComponent;
  let fixture: ComponentFixture<ActividadesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
