import { Component } from '@angular/core';

import { Store, createSelector } from '@ngrx/store';
import { selectProducts } from '../product.selectors';
import * as actions from './actions';
import { productFeature } from '../product.reducer';
import { ratingFeature } from '../rating.reducer';

const productListVm = createSelector({
  products: selectProducts,
  productsRequestStatus: productFeature.selectProductsRequestStatus,
  customerRatings: ratingFeature.selectRatingsDictionary,
});

@Component({
  selector: 'ngrx-workshop-home',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  readonly productListVm$ = this.store.select(productListVm);

  constructor(private readonly store: Store) {
    this.store.dispatch(actions.productsOpened());
  }
}
