import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorlistPage } from './authorlist.page';

describe('AuthorlistPage', () => {
  let component: AuthorlistPage;
  let fixture: ComponentFixture<AuthorlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
