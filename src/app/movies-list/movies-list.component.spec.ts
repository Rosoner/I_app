import { ComponentFixture, TestBed } from '@angular/core/testing';

import { moviesListComponent } from './movies-list.component';

describe('moviesListComponent', () => {
  let component: moviesListComponent;
  let fixture: ComponentFixture<moviesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [moviesListComponent]
    });
    fixture = TestBed.createComponent(moviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
