import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Item } from '../home/models/Item';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  selectedItem: Item | undefined;
  paramsSub: Subscription | null = null;
  cartQuantity: number = 1;

  onQuantityChange(quantity: number) {
    this.cartQuantity = quantity;
  }

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private readonly cartService: CartService
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.apiService.getItemById(id).subscribe((item) => {
          this.selectedItem = item;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }

  addToCart(): void {
    if (this.selectedItem) {
      this.cartService.addToCart(this.selectedItem, this.cartQuantity);
    }
  }
}
