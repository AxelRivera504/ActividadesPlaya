import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayitasComponent } from './create-playitas.component';

describe('CreatePlayitasComponent', () => {
  let component: CreatePlayitasComponent;
  let fixture: ComponentFixture<CreatePlayitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlayitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlayitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
