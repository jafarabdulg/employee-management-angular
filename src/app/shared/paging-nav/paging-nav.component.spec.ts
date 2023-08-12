import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingNavComponent } from './paging-nav.component';

describe('PagingNavComponent', () => {
  let component: PagingNavComponent;
  let fixture: ComponentFixture<PagingNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagingNavComponent]
    });
    fixture = TestBed.createComponent(PagingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
