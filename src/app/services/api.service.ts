import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from '../home/models/Item';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private products$ = this.http.get<Item[]>(
    'http://localhost:3000/api/products'
  );
  constructor(private http: HttpClient) {}
  getBestsellers() {
    return this.http.get<Item[]>('http://localhost:3000/api/bestsellers');
  }

  getSale() {
    return this.http.get<Item[]>('http://localhost:3000/api/sale');
  }

  getProducts() {
    return this.http.get<Item[]>('http://localhost:3000/api/products');
  }

  getItemById(id: string): Observable<Item> {
    return this.http
      .get<Item[]>('http://localhost:3000/api/products')
      .pipe(map((items: Item[]) => items.find((item) => item.id === id)!));
  }

  get products() {
    return this.products$;
  }
}
