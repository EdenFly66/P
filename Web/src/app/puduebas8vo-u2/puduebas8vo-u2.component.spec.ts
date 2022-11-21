import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puduebas8voU2Component } from './puduebas8vo-u2.component';

describe('Puduebas8voU2Component', () => {
  let component: Puduebas8voU2Component;
  let fixture: ComponentFixture<Puduebas8voU2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puduebas8voU2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puduebas8voU2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
