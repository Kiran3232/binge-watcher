import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCredits(type: string, id: number) {
    return this.http.get(environment.baseApiUrl + type + '/' + id + '/credits');
  }
}
