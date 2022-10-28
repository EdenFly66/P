import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido8voU3Component } from './contenido8vo-u3.component';

describe('Contenido8voU3Component', () => {
  let component: Contenido8voU3Component;
  let fixture: ComponentFixture<Contenido8voU3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenido8voU3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenido8voU3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
