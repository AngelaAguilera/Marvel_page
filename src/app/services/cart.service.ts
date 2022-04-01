import { CartProducts } from './../models/cartProducts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http:HttpClient
  ) { }

  addProduct() {
  }

  getProducts():Observable<CartProducts[]> {
    const products = this.http.get<CartProducts[]>("http://localhost:3000/cart");
    return products;
  }
}
