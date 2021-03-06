import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastMoviesComponent } from './cast-movies.component';

describe('CastMoviesComponent', () => {
  let component: CastMoviesComponent;
  let fixture: ComponentFixture<CastMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
