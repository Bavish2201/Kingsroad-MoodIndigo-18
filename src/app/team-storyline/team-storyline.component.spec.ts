import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStorylineComponent } from './team-storyline.component';

describe('TeamStorylineComponent', () => {
  let component: TeamStorylineComponent;
  let fixture: ComponentFixture<TeamStorylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStorylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStorylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
