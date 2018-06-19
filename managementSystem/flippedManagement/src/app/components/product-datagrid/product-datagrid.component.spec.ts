import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatagridComponent } from './product-datagrid.component';

describe('ProductDatagridComponent', () => {
  let component: ProductDatagridComponent;
  let fixture: ComponentFixture<ProductDatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
