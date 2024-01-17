import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducer, CART_FEATURE_KEY } from './cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as cartEffects from './cart.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(CART_FEATURE_KEY, cartReducer),
    EffectsModule.forFeature(cartEffects),
  ],
})
export class CartModule {}
