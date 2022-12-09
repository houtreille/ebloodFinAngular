import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {InterestRate} from "../model/rate/interest-rate";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class InterestRateService {

  private interestRatesUrl: string;

  constructor(private http: HttpClient) {
    this.interestRatesUrl = 'http://localhost:8666/interestRate';
  }

  public findAll(): Observable<InterestRate[]> {
    return this.http.get<InterestRate[]>(this.interestRatesUrl);
  }

  public save(ir: InterestRate) {
    return this.http.post<InterestRate>('http://localhost:8666/createInterestRate', ir);
  }
}
