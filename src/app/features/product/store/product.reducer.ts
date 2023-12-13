import { createFeature, createReducer, on } from '@ngrx/store';
import { productActions } from './product.actions';

export interface Product {
  id: number;
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
  icon: string;
}

export interface ProductState {
  products: Product[] | null | undefined;
  productSelected: Product[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  productSelected: [],
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
    })),

    // Select
    on(productActions.selectProductRequest, (state, action) => ({
      ...state,
      productSelected: [...state.productSelected, action.product],
    })),

    // Deselect product
    on(productActions.deselectProductRequest, (state, action) => ({
      ...state,
      productSelected: [
        ...state.productSelected.filter((p) => p.id !== action.product.id),
      ],
    }))
  ),
});

export const {
  name: productFeatureKey,
  reducer: productReducer,
  selectProducts,
  selectIsLoading,
  selectProductSelected,
  selectError,
} = productFeature;
