import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastShowcaseComponent } from './cast-showcase.component';

describe('CastShowcaseComponent', () => {
  let component: CastShowcaseComponent;
  let fixture: ComponentFixture<CastShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
