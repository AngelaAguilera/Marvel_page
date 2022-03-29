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

  constructor(
    private comicsService: ComicsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getComic();
  }

  public getComic(): void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.comicsService.getComic(id).subscribe(response => {
      this.comicDetail = response.data.results[0];
      console.log(response.data.results);
      
    });
  }

}
