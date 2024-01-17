import { createActionGroup, props } from '@ngrx/store';

export const productDetailsActions = createActionGroup({
  source: 'Product Details Page',
  events: {
    addToCartClicked: props<{ productId: string }>(),
  },
});
