import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';

@Component({
  selector: 'app-clima-search',
  templateUrl: './clima-search.component.html',
  styleUrls: ['./clima-search.component.css'],
})
export class ClimaSearchComponent {
  value: Params;

  constructor(private router: Router, private r: ActivatedRoute) {
    this.r.queryParams.subscribe((params) => {
      this.value = params['city'];
    });
  }

  public search() {
    if (!this.value) return;
    this.router.navigate([], { queryParams: { city: this.value } });
  }
}
