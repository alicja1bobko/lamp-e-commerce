import { Component } from '@angular/core';
import { Item } from 'src/app/home/models/Item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private apiService: ApiService) {}
  products: Item[] = [];
  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
