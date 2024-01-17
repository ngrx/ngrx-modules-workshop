import { createReducer, on } from '@ngrx/store';

import * as productListActions from './product-list/actions';
import { ProductModel } from '../model/product';

const { productApiActions } = productListActions;

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
