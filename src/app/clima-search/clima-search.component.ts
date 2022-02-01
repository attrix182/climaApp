import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-clima-search',
  templateUrl: './clima-search.component.html',
  styleUrls: ['./clima-search.component.css'],
})
export class ClimaSearchComponent {
  value: Params;
  valAux: string = '';

  constructor(private router: Router) {}

  public search() {
    this.router.navigate([], { queryParams: { city: this.value } });
  }
}
