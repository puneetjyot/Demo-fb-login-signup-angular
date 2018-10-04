import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsubmitComponent } from './fbsubmit.component';

describe('FbsubmitComponent', () => {
  let component: FbsubmitComponent;
  let fixture: ComponentFixture<FbsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
