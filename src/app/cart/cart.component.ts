import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../home/models/Item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$: CartItem[] = [];

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((cartMap: Map<Item, number>) => {
      this.cartItems$ = Array.from(cartMap.entries()).map(
        ([item, quantity]) => ({
          item,
          quantity,
        })
      );
    });
  }
}
export interface CartItem {
  item: Item;
  quantity: number;
}
