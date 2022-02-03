import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClimaApiService } from '../clima-api.service';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrls: ['./clima-card.component.css'],
})
export class ClimaCardComponent implements OnInit {
  city: any;
  resultado: any = {};
  icono: string = '';

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

  setearIconos() {
    let desc = this.resultado.weather[0].description;

    switch (desc) {
      case 'mist':
        this.icono = 'fas fa-smog';
        break;
      case 'clear sky':
        this.icono = 'fas fa-sun';
        break;
      case 'overcast clouds':
        this.icono = 'fas fa-cloud';
        break;
      case 'light rain':
        this.icono = 'fas fa-cloud-rain';
        break;
      case 'light snow':
        this.icono = 'fas fa-snowflake';
        break;
      default:
        if (desc.includes('clouds')) {
          this.icono = 'fas fa-cloud';
        } else if (desc.includes('snow')) {
          this.icono = 'fas fa-snowflake';
        } else if (desc.includes('rain')) {
          this.icono = 'fas fa-cloud-rain';
        } else if (desc.includes('sun')) {
          this.icono = 'fas fa-sun';
        } else if (desc.includes('thunder')) {
          this.icono = 'fas fa-bolt';
        }
    }
  }

  getClima(city) {
    this.climaSVC.getClimaByCity(city).subscribe((result: any) => {
      this.resultado = result;
      this.setearIconos();
      console.log(this.resultado);
    });
  }
}
