import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../home/models/Item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$ = new BehaviorSubject<Map<Item, number>>(new Map());

  constructor() {}

  addToCart(item: Item, quantity: number): void {
    let currentCartItems = this.cartItems$.value;

    // Find the item by its id
    const existingItem = Array.from(currentCartItems.keys()).find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      const currentQuantity = currentCartItems.get(existingItem)!;
      currentCartItems.set(existingItem, currentQuantity + quantity);
    } else {
      currentCartItems.set(item, quantity);
    }

    this.cartItems$.next(currentCartItems);
  }

  getCartItems(): Observable<Map<Item, number>> {
    return this.cartItems$;
  }

  getItemQuantity(id: string): number {
    let currentCartItems = this.cartItems$.value;
    const item = Array.from(currentCartItems.keys()).find(
      (cartItem) => cartItem.id === id
    )!;
    const currentQuantity = currentCartItems.get(item)!;
    return currentQuantity;
  }

  incrementQuantity(item: Item): void {
    let currentCartItems = this.cartItems$.value;
    const currentQuantity = currentCartItems.get(item)!;
    currentCartItems.set(item, currentQuantity + 1);
    this.cartItems$.next(currentCartItems);
  }

  decrementQuantity(item: Item): void {
    let currentCartItems = this.cartItems$.value;
    const currentQuantity = currentCartItems.get(item)!;
    if (currentQuantity > 1) currentCartItems.set(item, currentQuantity - 1);
    else currentCartItems.delete(item);
    this.cartItems$.next(currentCartItems);
  }
}
