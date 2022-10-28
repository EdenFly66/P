import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenidos8voComponent } from './contenidos8vo.component';

describe('Contenidos8voComponent', () => {
  let component: Contenidos8voComponent;
  let fixture: ComponentFixture<Contenidos8voComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenidos8voComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenidos8voComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
