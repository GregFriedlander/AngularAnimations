import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimSubComponent } from './anim-sub.component';

describe('AnimSubComponent', () => {
  let component: AnimSubComponent;
  let fixture: ComponentFixture<AnimSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
