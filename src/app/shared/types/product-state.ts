import { Product } from './product';

export interface ProductState {
  products: Product[] | null | undefined;
  productSelected: Product[];
  isLoading: boolean;
  error: string;
}
