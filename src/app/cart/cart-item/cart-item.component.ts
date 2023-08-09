import { Component, Input } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { CartItem } from '../cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input('cartItem') cartItem?: CartItem;
}
