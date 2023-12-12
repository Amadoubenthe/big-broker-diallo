import { createFeature, createReducer, on } from '@ngrx/store';
import { productActions } from './product.actions';

export interface Product {
  title: string;
  subtitle: string;
  level: number;
  cours: Cour[];
  price_month: number;
  price_year: number;
}

export interface Cour {
  title: string;
  percentage: string;
}

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
