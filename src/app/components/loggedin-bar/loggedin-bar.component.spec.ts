import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinBarComponent } from './loggedin-bar.component';

describe('LoggedinBarComponent', () => {
  let component: LoggedinBarComponent;
  let fixture: ComponentFixture<LoggedinBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
