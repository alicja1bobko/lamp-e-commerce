import { Component } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
})
export class TotalPriceComponent {
  cartItems$: Map<Item, number> = new Map<Item, number>();
  total$: number = 0;
  subtotal$: number = 0;
  shipping$: number = 20;
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems$ = items;
      this.subtotal$ = this.calculateSubtotal();
      this.total$ = this.subtotal$ + this.shipping$;
    });
  }
  calculateSubtotal(): number {
    let total = 0;
    this.cartItems$.forEach((quantity, item) => {
      total += item.price * quantity;
    });
    return total;
  }
}
