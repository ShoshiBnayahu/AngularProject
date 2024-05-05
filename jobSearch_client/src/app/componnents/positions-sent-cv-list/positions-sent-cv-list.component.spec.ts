import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsSentCVListComponent } from './positions-sent-cv-list.component';

describe('PositionsSentCVListComponent', () => {
  let component: PositionsSentCVListComponent;
  let fixture: ComponentFixture<PositionsSentCVListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionsSentCVListComponent]
    });
    fixture = TestBed.createComponent(PositionsSentCVListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
