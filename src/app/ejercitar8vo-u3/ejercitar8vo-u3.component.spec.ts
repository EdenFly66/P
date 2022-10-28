import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercitar8voU3Component } from './ejercitar8vo-u3.component';

describe('Ejercitar8voU3Component', () => {
  let component: Ejercitar8voU3Component;
  let fixture: ComponentFixture<Ejercitar8voU3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercitar8voU3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercitar8voU3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
