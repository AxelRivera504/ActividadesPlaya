import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesEditarComponent } from './roles.Edit.component';

describe('RolesEditarComponent', () => {
  let component: RolesEditarComponent;
  let fixture: ComponentFixture<RolesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
