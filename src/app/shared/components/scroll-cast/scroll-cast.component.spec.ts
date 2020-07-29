import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollCastComponent } from './scroll-cast.component';

describe('ScrollCastComponent', () => {
  let component: ScrollCastComponent;
  let fixture: ComponentFixture<ScrollCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
