import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblabelComponent } from './fblabel.component';

describe('FblabelComponent', () => {
  let component: FblabelComponent;
  let fixture: ComponentFixture<FblabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FblabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FblabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
