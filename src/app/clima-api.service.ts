import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import '../environment';
import { environment } from '../environment';

@Injectable()
export class ClimaApiService {
  urlApi: string = `https://api.openweathermap.org/data/2.5/weather?q=`;

  APIkey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getClimaByCity(city) {
    return this.http.get(`${this.urlApi}${city}&appid=${this.APIkey}`);
  }
}
