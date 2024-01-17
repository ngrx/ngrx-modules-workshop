import { createReducer, on } from '@ngrx/store';

import { ProductModel } from '../model/product';
import { productApiActions } from './actions';

export interface GlobalState {
  product: ProductState;
}

interface ProductState {
  products?: ProductModel[];
}

const initialState: ProductState = {
  products: undefined,
};

export const productReducer = createReducer(
  initialState,
  on(productApiActions.productsFetchedSuccess, (state, { products }) => ({
    ...state,
    products: [...products],
  })),
  on(productApiActions.productsFetchedError, (state) => ({
    ...state,
    products: [],
  }))
);
