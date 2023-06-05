import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesplayitasComponent } from './detallesplayitas.component';

describe('DetallesplayitasComponent', () => {
  let component: DetallesplayitasComponent;
  let fixture: ComponentFixture<DetallesplayitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesplayitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesplayitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
