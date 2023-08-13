import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHeaderComponent } from './movies-header.component';

describe('MoviesHeaderComponent', () => {
  let component: MoviesHeaderComponent;
  let fixture: ComponentFixture<MoviesHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesHeaderComponent]
    });
    fixture = TestBed.createComponent(MoviesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
