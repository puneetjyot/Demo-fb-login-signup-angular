import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbtextboxComponent } from './fbtextbox.component';

describe('FbtextboxComponent', () => {
  let component: FbtextboxComponent;
  let fixture: ComponentFixture<FbtextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbtextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbtextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
