import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClimaCardComponent } from './clima-card/clima-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([]), CommonModule],
  declarations: [AppComponent, HelloComponent, ClimaCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
