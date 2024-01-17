import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as productListActions from './product/product-list/actions';
import { tap } from 'rxjs';

const { productApiActions } = productListActions;

export const handleFetchErrors = createEffect(
  (action$ = inject(Actions), snackBar = inject(MatSnackBar)) => {
    return action$.pipe(
      ofType(productApiActions.productsFetchedError),
      tap(({ errorMessage }) => {
        snackBar.open(errorMessage, 'Error', {
          duration: 2500,
        });
      })
    );
  },
  { dispatch: false, functional: true }
);
