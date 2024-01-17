import { BasicProduct } from '@angular-monorepo/api-interfaces';
import { createAction, createActionGroup, props } from '@ngrx/store';

export const productsOpened = createAction('[Products List Page] Opened');

export const productApiActions = createActionGroup({
  source: 'Product API',
  events: {
    productsFetchedSuccess: props<{ products: BasicProduct[] }>(),
    productsFetchedError: props<{ errorMessage: string }>(),
  },
});
