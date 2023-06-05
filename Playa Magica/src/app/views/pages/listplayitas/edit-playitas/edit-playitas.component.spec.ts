import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayitasComponent } from './edit-playitas.component';

describe('EditPlayitasComponent', () => {
  let component: EditPlayitasComponent;
  let fixture: ComponentFixture<EditPlayitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlayitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlayitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
