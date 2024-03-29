import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartProduct } from '../../model/product';
import { createSelector, Store } from '@ngrx/store';
import { selectCartProducts, selectCartTotal } from '../cart.selectors';
import { cartDetailsActions } from './actions';

export const cartDetailsVm = createSelector({
  products: selectCartProducts,
  total: selectCartTotal,
});

@Component({
  selector: 'ngrx-workshop-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent {
  cartDetailsVm$: Observable<{
    products?: CartProduct[];
    total?: number;
  }> = this.store.select(cartDetailsVm);

  constructor(private readonly store: Store) {
    this.store.dispatch(cartDetailsActions.pageOpened());
  }

  removeOne(id: string) {
    this.store.dispatch(
      cartDetailsActions.removeProductClicked({ productId: id })
    );
  }

  removeAll() {
    this.store.dispatch(cartDetailsActions.removeAllClicked());
  }

  purchase(products: CartProduct[]) {
    this.store.dispatch(cartDetailsActions.purchaseClicked({ products }));
  }
}
