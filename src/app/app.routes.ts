import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('../app/features/product/product.routes').then(
        (m) => m.productsRoutes
      ),
  },
  { path: '**', redirectTo: 'products' },
];
