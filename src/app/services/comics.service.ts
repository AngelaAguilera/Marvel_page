import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic, Data } from '../models/comic';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  publickey = '4e60f5388411ab1f46d292201eea577e';
  hash = 'fc239fd6705a38c5c435c54094f36fe5';
  ts ='2022';
  urlApiComics = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic`;
  urlCredentials = `&apikey=${this.publickey}&ts=${this.ts}&hash=${this.hash}`;
  urlFilters: string;

  constructor(private http: HttpClient) { }

  getComics(): Observable<Data>{
    return this.http.get<Data>(this.urlApiComics+'&startYear=2021'+this.urlCredentials);
  }
  getComicsFilters(date: string, title: string, year: string): Observable<Data>{
    
    date == '' ? date = '' : date = '&dateDescriptor='+date;
    title == '' ? title = '' : title = '&titleStartsWith='+title;
    year == '' ? year = '' : year = '&startYear='+year;
    this.urlFilters = date+title+year;
    console.log(this.urlFilters);
    
    return this.http.get<Data>(this.urlApiComics+this.urlFilters+this.urlCredentials);
  }
}
