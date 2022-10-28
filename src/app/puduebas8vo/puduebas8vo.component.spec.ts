import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puduebas8voComponent } from './puduebas8vo.component';

describe('Puduebas8voComponent', () => {
  let component: Puduebas8voComponent;
  let fixture: ComponentFixture<Puduebas8voComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puduebas8voComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puduebas8voComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
