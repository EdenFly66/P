import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puduebas8voU3Component } from './puduebas8vo-u3.component';

describe('Puduebas8voU3Component', () => {
  let component: Puduebas8voU3Component;
  let fixture: ComponentFixture<Puduebas8voU3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puduebas8voU3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puduebas8voU3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
