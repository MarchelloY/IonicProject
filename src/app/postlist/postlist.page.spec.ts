import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistPage } from './postlist.page';

describe('PostlistPage', () => {
  let component: PostlistPage;
  let fixture: ComponentFixture<PostlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
