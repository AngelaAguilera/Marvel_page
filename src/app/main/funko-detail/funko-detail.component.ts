import { CartProducts } from './../../models/cartProducts';
import { CartService } from './../../services/cart.service';
import { Funko } from 'src/app/models/funkos';
import { ActivatedRoute } from '@angular/router';
import { FunkosService } from './../../services/funkos.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-funko-detail',
  templateUrl: './funko-detail.component.html',
  styleUrls: ['./funko-detail.component.scss']
})
export class FunkoDetailComponent implements OnInit {

  funkoDetail?: Funko;
  quantity: number = 1;
  showModal = false;

  constructor(
    private comicsService: FunkosService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFunko();
  }

  public addToCart() {
    const userId = localStorage.getItem("userId");
    const product: CartProducts = {
      id: Date.now()+"",
      userId: Number(userId),
      productId: this.funkoDetail.id,
      image: this.funkoDetail.image,
      price: this.funkoDetail.price,
      quantity: this.quantity,
      type: "funko",
      name: this.funkoDetail.name
    }
    this.cartService.addProduct(product).subscribe(res => {
      this.showModal = true;
      setTimeout(() => {
        this.showModal = false;
      }, 2000);
    });
  }

  public getFunko(): void {
    const id = 'id=' + Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.comicsService.getFunkos(id).subscribe(response => {
      this.funkoDetail = response[0];
    });
  }

  public onDecrement() {
    if (this.quantity > 1){
      --this.quantity;
    }
  }

  public onIncrement() {
    if (this.quantity < 10){
      ++this.quantity;
    }
  }

}
