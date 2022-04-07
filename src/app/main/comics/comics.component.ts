import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicsService } from '../../services/comics.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = [];
  load: boolean = true;
  comicsForm: FormGroup;
  dateRanges = [
    { id: "lastWeek", name: "Last week" },
    { id: "thisWeek", name: "This week" },
    { id: "nextWeek", name: "Next week" },
    { id: "thisMonth", name: "This month" }
  ];

  constructor(
    private comicService: ComicsService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.comicsForm = this.fb.group({
      dateRange: [''],
      title: [''],
      year: ['2022']
    });
    //this.getComics();
    this.getComicsFilter();
  }

  public getComics(): void {
    this.comicService.getComics().subscribe((result) => this.comics = result.data.results);
  }

  public getComicsFilter(): void {
    console.log(this.comicsForm.value);
    this.comicService.getComicsFilters(this.comicsForm.value.dateRange, this.comicsForm.value.title, this.comicsForm.value.year).subscribe((result) => {
      this.comics = result.data.results;
      this.load = false;
      console.log(this.comics);
    });
  }

}
