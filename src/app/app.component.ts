import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value: Params;
  valAux: string = '';

  constructor(private router: Router) {}

  public search() {
    this.router.navigate([], { queryParams: { city: this.value } });
  }
}
