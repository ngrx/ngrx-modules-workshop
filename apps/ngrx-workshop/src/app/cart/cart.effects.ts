import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap, timer } from 'rxjs';

import { CartService } from './cart.service';
import { cartActions } from './actions';
import { cartDetailActions } from './cart-details/actions';

const REFRESH_CART_ITEMS_INTERVAL_MS: number = 20000;

export const fetchCartItems = createEffect(
  () => {
    const cartService = inject(CartService);

    return inject(Actions).pipe(
      ofType(
        cartActions.timerTick,
        cartDetailActions.pageOpened,
        cartDetailActions.purchaseSuccess
      ),
      switchMap(() =>
        cartService.getCartProducts().pipe(
          map((cartItems) => cartActions.fetchCartItemsSuccess({ cartItems })),
          catchError(() =>
            of(
              cartActions.fetchCartItemsError({
                errorMessage: 'Error Fetching Cart Items',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);

export const init = createEffect(
  () =>
    timer(0, REFRESH_CART_ITEMS_INTERVAL_MS).pipe(
      map(() => cartActions.timerTick())
    ),
  { functional: true }
);
