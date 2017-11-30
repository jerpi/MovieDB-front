import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowcaseComponent } from './movie-showcase.component';

describe('MovieShowcaseComponent', () => {
  let component: MovieShowcaseComponent;
  let fixture: ComponentFixture<MovieShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
