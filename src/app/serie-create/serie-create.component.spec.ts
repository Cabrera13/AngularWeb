import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCreateComponent } from './serie-create.component';

describe('SerieCreateComponent', () => {
  let component: SerieCreateComponent;
  let fixture: ComponentFixture<SerieCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
