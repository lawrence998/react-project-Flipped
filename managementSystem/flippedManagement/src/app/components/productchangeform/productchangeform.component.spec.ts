import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductchangeformComponent } from './productchangeform.component';

describe('ProductchangeformComponent', () => {
  let component: ProductchangeformComponent;
  let fixture: ComponentFixture<ProductchangeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductchangeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductchangeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
