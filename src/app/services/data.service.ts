import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UserData } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { }


  searchData(_id: number): Observable<UserData[]> {

    const url = this.apiUrl;

    return this.http.get<UserData[]>( url );
  }

}
