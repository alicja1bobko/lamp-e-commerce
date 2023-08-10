import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { CartItem } from '../cart.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input('cartItem') cartItem!: CartItem;

  cartQuantity!: number;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartQuantity = this.cartService.getItemQuantity(this.cartItem.item.id);
  }

  onQuantityChange(quantity: number) {
    const diff = this.cartQuantity - quantity;
    if (diff == 1) this.cartService.decrementQuantity(this.cartItem.item);
    if (diff == -1) this.cartService.incrementQuantity(this.cartItem.item);
    this.cartQuantity = quantity;
  }
  removeItem(item: Item): void {
    this.cartQuantity = 0;
    this.cartService.removeItem(item);
  }
}
