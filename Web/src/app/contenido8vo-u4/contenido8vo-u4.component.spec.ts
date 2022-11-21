import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido8voU4Component } from './contenido8vo-u4.component';

describe('Contenido8voU4Component', () => {
  let component: Contenido8voU4Component;
  let fixture: ComponentFixture<Contenido8voU4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenido8voU4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenido8voU4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
