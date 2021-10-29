import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http : HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get('http://api.nbp.pl/api/exchangerates/tables/C/')
  }
}
