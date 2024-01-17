import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { ProductService } from './product.service';
import * as productListActions from './product-list/actions';

const { productApiActions } = productListActions;

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  fetchProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productListActions.productsOpened),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            productApiActions.productsFetchedSuccess({
              products,
            })
          ),
          catchError(() =>
            of(
              productApiActions.productsFetchedError({
                errorMessage: 'Error Fetching Products',
              })
            )
          )
        )
      )
    );
  });
}
