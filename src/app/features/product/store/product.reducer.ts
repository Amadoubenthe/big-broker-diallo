import { createFeature, createReducer, on } from '@ngrx/store';
import { productActions } from './product.actions';

export interface Product {
  id: number;
  name: string;
  price: number;
}

const p = [
  {
    id: 1,
    name: 'product 1',
    price: 2,
  },
  {
    id: 1,
    name: 'product 1',
    price: 2,
  },
  {
    id: 2,
    name: 'product 2',
    price: 2,
  },
  {
    id: 3,
    name: 'product 3',
    price: 2,
  },
];

export interface ProductState {
  products: Product[] | null | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
};

const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productActions.getProductsRequest, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(productActions.getProductsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      products: action.products,
    })),
    on(productActions.getProductsFailure, (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false,
    }))
  ),
});

export const {
  name: productFeatureKey,
  reducer: productReducer,
  selectProducts,
  selectIsLoading,
  selectError,
} = productFeature;
