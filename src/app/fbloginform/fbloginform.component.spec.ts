import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbloginformComponent } from './fbloginform.component';

describe('FbloginformComponent', () => {
  let component: FbloginformComponent;
  let fixture: ComponentFixture<FbloginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbloginformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
