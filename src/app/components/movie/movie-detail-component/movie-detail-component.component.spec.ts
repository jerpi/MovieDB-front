import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponentComponent } from './movie-detail-component.component';

describe('MovieDetailComponentComponent', () => {
  let component: MovieDetailComponentComponent;
  let fixture: ComponentFixture<MovieDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
