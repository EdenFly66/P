import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercitar8voU2Component } from './ejercitar8vo-u2.component';

describe('Ejercitar8voU2Component', () => {
  let component: Ejercitar8voU2Component;
  let fixture: ComponentFixture<Ejercitar8voU2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercitar8voU2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercitar8voU2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
