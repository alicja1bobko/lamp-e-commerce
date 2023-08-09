import { Component } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-subtotal-price',
  templateUrl: './subtotal-price.component.html',
  styleUrls: ['./subtotal-price.component.scss'],
})
export class SubtotalPriceComponent {
  cartItems$: Map<Item, number> = new Map<Item, number>();
  total$: number = 0;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems$ = items;
      this.total$ = this.calculateTotal();
    });
  }
  calculateTotal(): number {
    let total = 0;

    this.cartItems$.forEach((quantity, item) => {
      total += item.price * quantity;
    });

    return total;
  }
}
