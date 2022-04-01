import { CartProducts } from './../../models/cartProducts';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: CartProducts[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const userId = localStorage.getItem("userId");
    this.cartService.getProducts(userId).subscribe(response => this.products = response);
  }

}
