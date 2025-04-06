import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdquisicionesComponent } from './gestion-adquisiciones.component';

describe('GestionAdquisicionesComponent', () => {
  let component: GestionAdquisicionesComponent;
  let fixture: ComponentFixture<GestionAdquisicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdquisicionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdquisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
