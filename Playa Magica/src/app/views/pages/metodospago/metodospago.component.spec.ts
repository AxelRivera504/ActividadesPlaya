import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodospagoComponent } from './metodospago.component';

describe('MetodospagoComponent', () => {
  let component: MetodospagoComponent;
  let fixture: ComponentFixture<MetodospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodospagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
