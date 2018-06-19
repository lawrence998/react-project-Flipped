import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdataformComponent } from './productdataform.component';

describe('ProductdataformComponent', () => {
  let component: ProductdataformComponent;
  let fixture: ComponentFixture<ProductdataformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdataformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
