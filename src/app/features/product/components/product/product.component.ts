import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { selectProducts } from '../../store/product.reducer';
import { ProductState } from '../../store/product.reducer';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product/product.service';
import { productActions } from '../../store/product.actions';
import { ProductItmComponent } from '../product-itm/product-itm.component';
import { SidnavComponent } from '../../../../core/components/sidnav/sidnav.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ProductItmComponent,
    SidnavComponent,
    ProductFilterComponent,
  ],
})
export class ProductComponent {
  products$ = this.store.select(selectProducts);

  sidnavOpened = true;

  slectedLength: number = 3;

  constructor(private store: Store<{ product: ProductState }>) {}

  ngOnInit(): void {
    this.store.dispatch(productActions.getProductsRequest());
  }

  openSidnav() {
    this.sidnavOpened = !this.sidnavOpened;
  }
}
