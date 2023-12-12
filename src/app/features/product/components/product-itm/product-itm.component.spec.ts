import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItmComponent } from './product-itm.component';

describe('ProductItmComponent', () => {
  let component: ProductItmComponent;
  let fixture: ComponentFixture<ProductItmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
