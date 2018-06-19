import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerdatagridComponent } from './designerdatagrid.component';

describe('DesignerdatagridComponent', () => {
  let component: DesignerdatagridComponent;
  let fixture: ComponentFixture<DesignerdatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerdatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerdatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
