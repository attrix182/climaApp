import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClimaCardComponent } from './clima-card/clima-card.component';
import { ClimaSearchComponent } from './clima-search/clima-search.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([]), CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ClimaCardComponent,
    ClimaSearchComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
