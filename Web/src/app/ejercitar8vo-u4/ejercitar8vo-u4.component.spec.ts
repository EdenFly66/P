import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercitar8voU4Component } from './ejercitar8vo-u4.component';

describe('Ejercitar8voU4Component', () => {
  let component: Ejercitar8voU4Component;
  let fixture: ComponentFixture<Ejercitar8voU4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercitar8voU4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercitar8voU4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
