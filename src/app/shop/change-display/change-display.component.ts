import { Component } from '@angular/core';

@Component({
  selector: 'app-change-display',
  templateUrl: './change-display.component.html',
  styleUrls: ['./change-display.component.scss'],
})
export class ChangeDisplayComponent {
  selectedProductType: string = 'popularity';

  onTypeChange(): void {}
}
