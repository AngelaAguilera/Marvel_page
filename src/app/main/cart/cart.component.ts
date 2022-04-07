import { createMailBuy } from 'src/app/lib/createMail';
import { CartProducts } from './../../models/cartProducts';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

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
    private fb: FormBuilder,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.shippingForm = this.fb.group({
      name: ['', [Validators.pattern(/^[A-Za-z ]+$/),Validators.required,Validators.minLength(5)]],
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

  public buyNow() {
    //AGREGAR EL ENVIO DE CORREO
    if(this.shippingForm.valid) {
      const emailClient = createMailBuy();
      this.emailService.sendEmail(
        emailClient
      ).subscribe(res => { console.log(res) });
      alert('The shipping information has been saved');
    } else {
      alert('Please enter the information required');
    }
  }

  //Validadores de errores
  shippingFormControl(shippingtControl): FormControl {
    return this.shippingForm.controls[shippingtControl] as FormControl;
  }

  oneShippingFormControl(shippingtControl, error) {
    return this.shippingForm.get(shippingtControl).hasError(error);
  }

}
