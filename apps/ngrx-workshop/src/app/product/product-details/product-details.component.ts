import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Rating } from '@angular-monorepo/api-interfaces';

import { Store, createSelector } from '@ngrx/store';
import { productDetailsActions } from './actions';
import { selectCurrentProduct } from '../product.selectors';
import { ratingFeature } from '../rating.reducer';

const productDetailsVm = createSelector({
  product: selectCurrentProduct,
  customerRating: ratingFeature.selectCurrentRating,
});

@Component({
  selector: 'ngrx-workshop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  readonly vm$ = this.store.select(productDetailsVm);

  constructor(
    private readonly store: Store,
    private readonly location: Location
  ) {
    this.store.dispatch(productDetailsActions.pageOpened());
  }

  setRating(productId: string, rating: Rating) {
    this.store.dispatch(
      productDetailsActions.productRated({ productId, rating })
    );
  }

  addToCart(productId: string) {
    this.store.dispatch(productDetailsActions.addToCart({ productId }));
  }

  back() {
    this.location.back();
  }
}
