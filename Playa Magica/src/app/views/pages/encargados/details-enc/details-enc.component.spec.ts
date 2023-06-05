import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEncComponent } from './details-enc.component';

describe('DetailsEncComponent', () => {
  let component: DetailsEncComponent;
  let fixture: ComponentFixture<DetailsEncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
