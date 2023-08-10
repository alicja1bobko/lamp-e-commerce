import { Component } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar-light',
  templateUrl: './navbar-light.component.html',
  styleUrls: ['./navbar-light.component.scss'],
})
export class NavbarLightComponent {
  cartItems$: Map<Item, number> = new Map<Item, number>();
  total$: number = 0;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems$ = items;
      this.total$ = this.calculateTotalItems();
    });
  }
  calculateTotalItems(): number {
    let total = 0;
    this.cartItems$.forEach((quantity, item) => {
      total += quantity;
    });
    return total;
  }
}
