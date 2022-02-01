import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrls: ['./clima-card.component.css'],
})
export class ClimaCardComponent implements OnInit {
  @Input() city: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
    });
    console.log(this.city);
  }

  ngOnInit() {}
}
