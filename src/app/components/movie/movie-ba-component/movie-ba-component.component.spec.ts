import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBaComponentComponent } from './movie-ba-component.component';

describe('MovieBaComponentComponent', () => {
  let component: MovieBaComponentComponent;
  let fixture: ComponentFixture<MovieBaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
