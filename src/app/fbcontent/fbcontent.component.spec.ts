import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcontentComponent } from './fbcontent.component';

describe('FbcontentComponent', () => {
  let component: FbcontentComponent;
  let fixture: ComponentFixture<FbcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
