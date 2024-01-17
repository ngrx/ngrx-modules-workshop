import { createActionGroup, emptyProps } from '@ngrx/store';

export const cartDetailActions = createActionGroup({
  source: 'Cart Detail',
  events: {
    pageOpened: emptyProps(),
    purchaseSuccess: emptyProps(),
  },
});
