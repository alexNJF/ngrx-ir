import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouterialComponent } from './touterial.component';

describe('TouterialComponent', () => {
  let component: TouterialComponent;
  let fixture: ComponentFixture<TouterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouterialComponent]
    });
    fixture = TestBed.createComponent(TouterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
