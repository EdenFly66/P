import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puduebas8voU1Component } from './puduebas8vo-u1.component';

describe('Puduebas8voU1Component', () => {
  let component: Puduebas8voU1Component;
  let fixture: ComponentFixture<Puduebas8voU1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puduebas8voU1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puduebas8voU1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
