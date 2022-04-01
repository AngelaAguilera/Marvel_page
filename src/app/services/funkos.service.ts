import { HttpClient } from '@angular/common/http';
import { Funko } from './../models/funkos';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunkosService {

  constructor(private http: HttpClient) { }

  getFunkos(query:string = ''): Observable<Funko[]> {
    const result = this.http.get<Funko[]>(`http://localhost:3000/funkos?${query}`);
    return result;
  }

  getFunkosFilters(name: string, date: string): Observable<Funko[]> {
    if(name === ""){
      return this.getFunkos();
    }

    const result = this.http.get<Funko[]>(`http://localhost:3000/funkos?name=${name}&date=${date}`);
    return result;
  }
}
