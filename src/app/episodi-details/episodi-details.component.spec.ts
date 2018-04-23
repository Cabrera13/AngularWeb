import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiDetailsComponent } from './episodi-details.component';

describe('EpisodiDetailsComponent', () => {
  let component: EpisodiDetailsComponent;
  let fixture: ComponentFixture<EpisodiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
