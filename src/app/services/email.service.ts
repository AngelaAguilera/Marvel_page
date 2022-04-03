import { Observable } from 'rxjs';
import { Email } from './../models/email';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(email: Email):Observable<any> {
    return this.http.post<any>("http://localhost:3001/email", email, {headers: {'Access-Control-Allow-Origin': '*'}});
  }
}
