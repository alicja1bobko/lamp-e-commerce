import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Item } from 'src/app/home/models/Item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private apiService: ApiService) {}
  products: Item[] = [];
  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
