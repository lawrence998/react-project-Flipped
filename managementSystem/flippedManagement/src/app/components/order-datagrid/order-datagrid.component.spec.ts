import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDatagridComponent } from './order-datagrid.component';

describe('OrderDatagridComponent', () => {
  let component: OrderDatagridComponent;
  let fixture: ComponentFixture<OrderDatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
