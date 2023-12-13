import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from './product.reducer';

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    'Get Products Request': emptyProps(),
    'Get Products Success': props<{ products: Product[] }>(),
    'Get Products Failure': props<{ error: string }>(),

    // Select product
    'Select Product Request': props<{ product: Product }>(),

    // Deselect product
    'Deselect Product Request': props<{ product: Product }>(),
  },
});
