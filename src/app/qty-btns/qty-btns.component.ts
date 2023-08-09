import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qty-btns',
  templateUrl: './qty-btns.component.html',
  styleUrls: ['./qty-btns.component.scss'],
})
export class QtyBtnsComponent {
  quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  decrementQuantity(): void {
    if (this.quantity >= 2) {
      this.quantity = this.quantity - 1;
      this.quantityChange.emit(this.quantity);
    }
  }

  incrementQuantity(): void {
    this.quantity = this.quantity + 1;
    this.quantityChange.emit(this.quantity);
  }
}
