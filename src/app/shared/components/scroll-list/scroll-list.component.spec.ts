import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollListComponent } from './scroll-list.component';

describe('ScrollListComponent', () => {
  let component: ScrollListComponent;
  let fixture: ComponentFixture<ScrollListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
