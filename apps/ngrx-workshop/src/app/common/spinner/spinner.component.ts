import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-workshop-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
