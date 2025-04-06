import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoHistoricoComponent } from './almacenamiento-historico.component';

describe('AlmacenamientoHistoricoComponent', () => {
  let component: AlmacenamientoHistoricoComponent;
  let fixture: ComponentFixture<AlmacenamientoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenamientoHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenamientoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
