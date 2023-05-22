import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateestadoscivilesComponent } from './createestadosciviles.component';

describe('CreateestadoscivilesComponent', () => {
  let component: CreateestadoscivilesComponent;
  let fixture: ComponentFixture<CreateestadoscivilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateestadoscivilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateestadoscivilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
