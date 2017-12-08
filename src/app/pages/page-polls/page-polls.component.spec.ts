import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePollsComponent } from './page-polls.component';

describe('PagePollsComponent', () => {
  let component: PagePollsComponent;
  let fixture: ComponentFixture<PagePollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
