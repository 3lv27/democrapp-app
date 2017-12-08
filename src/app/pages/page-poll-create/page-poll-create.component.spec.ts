import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePollCreateComponent } from './page-poll-create.component';

describe('PagePollCreateComponent', () => {
  let component: PagePollCreateComponent;
  let fixture: ComponentFixture<PagePollCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePollCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePollCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
