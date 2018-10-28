import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDevelopmentComponent } from './prof-development.component';

describe('ProfDevelopmentComponent', () => {
  let component: ProfDevelopmentComponent;
  let fixture: ComponentFixture<ProfDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
