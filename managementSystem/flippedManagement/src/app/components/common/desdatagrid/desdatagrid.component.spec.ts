import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdatagridComponent } from './desdatagrid.component';

describe('DesdatagridComponent', () => {
  let component: DesdatagridComponent;
  let fixture: ComponentFixture<DesdatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesdatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
