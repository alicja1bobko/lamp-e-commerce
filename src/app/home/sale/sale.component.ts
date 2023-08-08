import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  sale: Item[] = [];
  ngOnInit() {
    this.apiService.getSale().subscribe((data) => {
      this.sale = data;
    });
  }
}
