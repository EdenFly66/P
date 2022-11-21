import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercitar8voU1Component } from './ejercitar8vo-u1.component';

describe('Ejercitar8voU1Component', () => {
  let component: Ejercitar8voU1Component;
  let fixture: ComponentFixture<Ejercitar8voU1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercitar8voU1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercitar8voU1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
