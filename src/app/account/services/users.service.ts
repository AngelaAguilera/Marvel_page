import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  url: string = 'http://localhost:3000/usersMarvel';
  
  getUser(usuario : User): Observable<User>{
    return this.http.get<User>(this.url+"?user="+usuario.user+"&password="+usuario.password);
  }

}
