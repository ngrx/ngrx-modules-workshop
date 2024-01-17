import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CART_FEATURE_KEY, CartState } from './cart.reducer';

const cartFeature = createFeatureSelector<CartState>(CART_FEATURE_KEY);

export const selectCartItems = createSelector(
  cartFeature,
  (state) => state.cartItems
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems
      ? cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
      : 0
);
