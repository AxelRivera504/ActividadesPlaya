import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoscivilesDetallesComponent } from './estadosciviles-detalles.component';

describe('EstadoscivilesDetallesComponent', () => {
  let component: EstadoscivilesDetallesComponent;
  let fixture: ComponentFixture<EstadoscivilesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoscivilesDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoscivilesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
