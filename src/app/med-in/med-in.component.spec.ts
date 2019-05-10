import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedInComponent } from './med-in.component';

describe('MedInComponent', () => {
  let component: MedInComponent;
  let fixture: ComponentFixture<MedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
