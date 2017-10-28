import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastlyComponent } from './lastly.component';

describe('LastlyComponent', () => {
  let component: LastlyComponent;
  let fixture: ComponentFixture<LastlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
