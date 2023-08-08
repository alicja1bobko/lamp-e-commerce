import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  bestsellers: Item[] = [];
  ngOnInit() {
    this.apiService.getBestsellers().subscribe((data) => {
      this.bestsellers = data;
    });
  }
}
