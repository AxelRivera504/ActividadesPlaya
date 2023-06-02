import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFiltradoComponent } from './reporte-filtrado.component';

describe('ReporteFiltradoComponent', () => {
  let component: ReporteFiltradoComponent;
  let fixture: ComponentFixture<ReporteFiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteFiltradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
