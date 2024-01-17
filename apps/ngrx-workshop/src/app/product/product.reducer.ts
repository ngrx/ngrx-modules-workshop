import { ProductModel } from '../model/product';
import { createReducer, on } from '@ngrx/store';
import * as productListActions from './product-list/actions';
import { data } from '@angular-monorepo/mock-data';

export interface GlobalState {
  product: ProductState;
}

interface ProductState {
  products?: ProductModel[];
}

const initState: ProductState = {
  products: undefined,
};

export const productReducer = createReducer(
  initState,
  on(productListActions.productsOpened, (state) => ({
    ...state,
    products: [...data],
  }))
);
