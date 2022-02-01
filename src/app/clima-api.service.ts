import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import '../environment';

@Injectable()
export class ClimaApiService {
  urlApi: string = `api.openweathermap.org/data/2.5/weather?q=`;

  APIkey = apiKey;

  constructor(private http: HttpClient) {}

  getClimaByCity(city) {
    this.http.get(`${this.urlApi}/${city}&appid=${this.APIkey}`);
  }
}
