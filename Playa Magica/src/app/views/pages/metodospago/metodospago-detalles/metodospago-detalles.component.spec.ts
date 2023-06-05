import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodospagoDetallesComponent } from './metodospago-detalles.component';

describe('MetodospagoDetallesComponent', () => {
  let component: MetodospagoDetallesComponent;
  let fixture: ComponentFixture<MetodospagoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodospagoDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodospagoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
