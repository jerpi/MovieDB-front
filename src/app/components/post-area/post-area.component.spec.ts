import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAreaComponent } from './post-area.component';

describe('PostAreaComponent', () => {
  let component: PostAreaComponent;
  let fixture: ComponentFixture<PostAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
