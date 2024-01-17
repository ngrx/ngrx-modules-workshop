import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CartIconModule } from './cart/cart-icon/cart-icon.module';
import { RoutingModule } from './router/routing.module';
import { productReducer } from './product/product.reducer';
import { ProductEffects } from './product/product.effects';
import * as errorEffects from './error.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    CartIconModule,
    MatToolbarModule,
    StoreModule.forRoot({ product: productReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([ProductEffects, errorEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
