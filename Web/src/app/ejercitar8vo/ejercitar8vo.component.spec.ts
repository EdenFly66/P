import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercitar8voComponent } from './ejercitar8vo.component';

describe('Ejercitar8voComponent', () => {
  let component: Ejercitar8voComponent;
  let fixture: ComponentFixture<Ejercitar8voComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercitar8voComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercitar8voComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
