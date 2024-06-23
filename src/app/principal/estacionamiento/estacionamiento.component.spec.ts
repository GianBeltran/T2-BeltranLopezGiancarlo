import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamientoComponent } from './estacionamiento.component';

describe('EstacionamientoComponent', () => {
  let component: EstacionamientoComponent;
  let fixture: ComponentFixture<EstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstacionamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
