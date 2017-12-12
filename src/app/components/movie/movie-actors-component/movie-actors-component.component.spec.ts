import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieActorsComponentComponent } from './movie-actors-component.component';

describe('MovieActorsComponentComponent', () => {
  let component: MovieActorsComponentComponent;
  let fixture: ComponentFixture<MovieActorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieActorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieActorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
