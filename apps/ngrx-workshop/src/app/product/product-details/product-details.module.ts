import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { StarsModule } from '../../common/stars/stars.module';
import { ProductDetailsComponent } from './product-details.component';
import { ReviewsComponentModule } from './reviews/reviews.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    StarsModule,
    MatProgressBarModule,
    SpinnerModule,
    MatCardModule,
    ReviewsComponentModule
  ],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
