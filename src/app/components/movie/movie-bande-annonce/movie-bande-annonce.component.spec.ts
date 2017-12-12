import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBandeAnnonceComponent } from './movie-bande-annonce.component';

describe('MovieBandeAnnonceComponent', () => {
  let component: MovieBandeAnnonceComponent;
  let fixture: ComponentFixture<MovieBandeAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBandeAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBandeAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
