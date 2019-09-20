import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTopServerComponent } from './side-top-server.component';

describe('SideTopServerComponent', () => {
  let component: SideTopServerComponent;
  let fixture: ComponentFixture<SideTopServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTopServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTopServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
