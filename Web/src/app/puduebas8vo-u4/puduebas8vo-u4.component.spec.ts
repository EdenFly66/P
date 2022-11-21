import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puduebas8voU4Component } from './puduebas8vo-u4.component';

describe('Puduebas8voU4Component', () => {
  let component: Puduebas8voU4Component;
  let fixture: ComponentFixture<Puduebas8voU4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puduebas8voU4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puduebas8voU4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
