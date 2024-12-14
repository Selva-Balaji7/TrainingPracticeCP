import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEdtComponent } from './product-edt.component';

describe('ProductEdtComponent', () => {
  let component: ProductEdtComponent;
  let fixture: ComponentFixture<ProductEdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
