import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiCreateComponent } from './episodi-create.component';

describe('EpisodiCreateComponent', () => {
  let component: EpisodiCreateComponent;
  let fixture: ComponentFixture<EpisodiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
