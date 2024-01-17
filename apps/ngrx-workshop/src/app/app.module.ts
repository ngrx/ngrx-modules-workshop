import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { CartIconModule } from './cart/cart-icon/cart-icon.module';
import { RoutingModule } from './router/routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productFeature } from './product/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product/product.effects';
import * as errorEffects from './error.effects';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    CartIconModule,
    MatToolbarModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(productFeature),
    EffectsModule.forRoot(ProductEffects, errorEffects),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    CartModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
