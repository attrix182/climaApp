import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClimaApiService } from '../clima-api.service';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrls: ['./clima-card.component.css'],
})
export class ClimaCardComponent implements OnInit {
  city: any;
  resultado: any = {};

  constructor(
    private route: ActivatedRoute,
    private climaSVC: ClimaApiService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      if (this.city) {
        this.getClima(this.city);
      }
    });
  }

  ngOnInit() {}

  getClima(city) {
    this.climaSVC.getClimaByCity(city).subscribe((result: any) => {
      this.resultado = result;
      console.log(this.resultado);
    });
  }
}
