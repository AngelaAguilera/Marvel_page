import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  comics: Comic[];

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.getComics();
  }

  public getComics(): void {
    this.comicService.getComics().subscribe((result) => this.comics = result.data.results);
  }

}
