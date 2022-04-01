import { CartProducts } from './../../models/cartProducts';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  comicDetail?: Comic;
  quantity: number = 1;
  showModal = false;

  constructor(
    private cartService: CartService,
    private comicsService: ComicsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getComic();
  }

  public addToCart() {
    const userId = localStorage.getItem("userId");
    const product: CartProducts = {
      id: Date.now()+"",
      userId: Number(userId),
      productId: this.comicDetail.id,
      image: this.comicDetail.thumbnail.path+"."+this.comicDetail.thumbnail.extension,
      price: this.comicDetail.prices[0].price,
      quantity: this.quantity,
      type: "funko",
      name: this.comicDetail.title
    }
    this.cartService.addProduct(product).subscribe(res => {
      this.showModal = true;
      setTimeout(() => {
        this.showModal = false;
      }, 2000);
    });
  }

  public getComic(): void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.comicsService.getComic(id).subscribe(response => {
      this.comicDetail = response.data.results[0];
      console.log(response.data.results);

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
