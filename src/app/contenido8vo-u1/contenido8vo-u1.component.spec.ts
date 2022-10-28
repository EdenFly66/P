import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido8voU1Component } from './contenido8vo-u1.component';

describe('Contenido8voU1Component', () => {
  let component: Contenido8voU1Component;
  let fixture: ComponentFixture<Contenido8voU1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenido8voU1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenido8voU1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
