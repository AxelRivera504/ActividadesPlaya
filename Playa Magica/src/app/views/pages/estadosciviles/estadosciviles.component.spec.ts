import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoscivilesComponent } from './estadosciviles.component';

describe('EstadoscivilesComponent', () => {
  let component: EstadoscivilesComponent;
  let fixture: ComponentFixture<EstadoscivilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoscivilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoscivilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
