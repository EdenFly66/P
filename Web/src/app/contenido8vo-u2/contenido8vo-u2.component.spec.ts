import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido8voU2Component } from './contenido8vo-u2.component';

describe('Contenido8voU2Component', () => {
  let component: Contenido8voU2Component;
  let fixture: ComponentFixture<Contenido8voU2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenido8voU2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenido8voU2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
