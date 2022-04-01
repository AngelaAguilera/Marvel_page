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

  addProduct(product: CartProducts):Observable<boolean> {
    const products = this.http.post<any>(`http://localhost:3000/cart`,product);
    return products;
  }

  getProducts(userId:string):Observable<CartProducts[]> {
    const products = this.http.get<CartProducts[]>(`http://localhost:3000/cart?userId=${userId}`);
    return products;
  }
}
