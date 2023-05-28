import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplayitasComponent } from './listplayitas.component';

describe('ListplayitasComponent', () => {
  let component: ListplayitasComponent;
  let fixture: ComponentFixture<ListplayitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplayitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListplayitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
