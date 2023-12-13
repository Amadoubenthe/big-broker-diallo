import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { Product, ProductState } from '../../store/product.reducer';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { productActions } from '../../store/product.actions';

@Component({
  selector: 'app-product-itm',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './product-itm.component.html',
  styleUrl: './product-itm.component.scss',
})
export class ProductItmComponent {
  @Input() product!: Product;
  @Input() isMonthPrice!: boolean;
  checked = false;

  constructor(private store: Store<{ product: ProductState }>) {}

  onChange(event: boolean, product: Product) {
    if (event) {
      this.store.dispatch(productActions.selectProductRequest({ product }));
    } else {
      this.store.dispatch(productActions.deselectProductRequest({ product }));
    }
  }
}
