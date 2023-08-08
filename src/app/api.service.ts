import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './home/models/Item';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getBestsellers() {
    return this.http.get<Item[]>('http://localhost:3000/api/bestsellers');
  }

  getSale() {
    return this.http.get<Item[]>('http://localhost:3000/api/sale');
  }
}
