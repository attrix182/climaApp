import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ClimaApiService } from '../clima-api.service';

@Component({
  selector: 'app-clima-search',
  templateUrl: './clima-search.component.html',
  styleUrls: ['./clima-search.component.css'],
})
export class ClimaSearchComponent {
  value: Params;
  resultado;

  constructor(private router: Router, private climaSVC: ClimaApiService) {}

  public search() {
    this.router.navigate([], { queryParams: { city: this.value } });
  }
}
