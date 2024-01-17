import { createActionGroup, props } from '@ngrx/store';

export const productDetailsActions = createActionGroup({
  source: 'Product Details Page',
  events: {
    addedToCart: props<{ productId: string }>(),
  },
});
