import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../home/models/Item';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$: CartItem[] = [];
  private cartSubscription: Subscription | undefined;
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService
      .getCartItems()
      .subscribe((cartMap: Map<Item, number>) => {
        this.cartItems$ = Array.from(cartMap.entries()).map(
          ([item, quantity]) => ({
            item,
            quantity,
          })
        );
      });
  }
  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
export interface CartItem {
  item: Item;
  quantity: number;
}
