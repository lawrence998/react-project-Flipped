import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBoxComponent } from './show-box.component';

describe('ShowBoxComponent', () => {
  let component: ShowBoxComponent;
  let fixture: ComponentFixture<ShowBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
