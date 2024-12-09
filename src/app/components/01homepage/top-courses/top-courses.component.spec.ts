import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCoursesComponent } from './top-courses.component';

describe('TopCoursesComponent', () => {
  let component: TopCoursesComponent;
  let fixture: ComponentFixture<TopCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCoursesComponent]
    });
    fixture = TestBed.createComponent(TopCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
