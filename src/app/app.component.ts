import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculasApp';

  constructor(private router: Router) { }

  showTheatres() {
    this.router.navigate(['/categoria', "teatros"]);
  }

  showPopulars() {
    this.router.navigate(['/categoria', "populares"]);
  }

  showKids() {
    this.router.navigate(['/categoria', "kids"]);
  }
}
