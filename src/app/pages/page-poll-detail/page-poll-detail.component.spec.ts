import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePollDetailComponent } from './page-poll-detail.component';

describe('PagePollDetailComponent', () => {
  let component: PagePollDetailComponent;
  let fixture: ComponentFixture<PagePollDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePollDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePollDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
