import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocComponent } from './toc.component';

describe('TocComponent', () => {
  let component: TocComponent;
  let fixture: ComponentFixture<TocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TocComponent]
    });
    fixture = TestBed.createComponent(TocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
