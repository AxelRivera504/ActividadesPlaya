import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscliComponent } from './detailscli.component';

describe('DetailscliComponent', () => {
  let component: DetailscliComponent;
  let fixture: ComponentFixture<DetailscliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailscliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
