import { CartProducts } from './../../models/cartProducts';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: CartProducts[] = [];
  shippingForm: FormGroup;
  total: number;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.shippingForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(10)]],
      city: ['', [Validators.required,Validators.minLength(2)]],
      state: ['', [Validators.required,Validators.minLength(2)]],
      address: ['', [Validators.required,Validators.minLength(5)]],
      zipcode: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(10)]],
      details: ['']
    })
    this.getProducts();
  }

  getProducts() {
    const userId = localStorage.getItem("userId");
    this.cartService.getProducts(userId).subscribe(response => {
      this.products = response;
      this.total = this.products.reduce((sum,prod,) => sum + (prod.price), 0);
    });
    
  }

  public addAddress() {
    if(this.shippingForm.valid) {
      alert('The shipping information has been saved');
    } else {
      alert('Please enter the information required');
    }
  }

}
