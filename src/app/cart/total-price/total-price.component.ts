import { Component, Input, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
})
export class TotalPriceComponent {
  cartItems$: Map<Item, number> = new Map<Item, number>();
  subtotal$: number = 0;
  shipping$: number = 0;
  total$: number = 0;

  @Input() shippingMethod: string = 'inpost';

  constructor(private readonly cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('shippingMethod' in changes) {
      this.calculateShipping();
      this.calculateTotal();
    }
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems$ = items;
      this.calculateSubtotal();
      this.calculateTotal();
    });
  }

  calculateSubtotal(): void {
    this.subtotal$ = Array.from(this.cartItems$).reduce(
      (total, [item, quantity]) => total + item.price * quantity,
      0
    );
  }

  calculateShipping(): void {
    if (this.shippingMethod === 'pickup') {
      this.shipping$ = 0;
    } else if (this.shippingMethod === 'inpost') {
      this.shipping$ = 20;
    } else if (this.shippingMethod === 'DPD') {
      this.shipping$ = 24;
    }
  }

  calculateTotal(): void {
    this.calculateShipping();
    this.total$ = this.subtotal$ + this.shipping$;
  }
}
