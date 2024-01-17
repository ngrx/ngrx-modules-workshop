import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CartService } from '../cart.service';
import { selectCartItemsCount } from '../cart.selectors';

@Component({
  selector: 'ngrx-workshop-cart',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
})
export class CartIconComponent {
  cartItemsCounter$ = this.store.select(selectCartItemsCount);

  constructor(
    private readonly cartService: CartService,
    private readonly store: Store
  ) {
    this.cartService.getCartProducts();
  }
}
