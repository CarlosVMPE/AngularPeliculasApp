import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

// Routes
import { AppRoutingModule } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { MovieComponent } from './components/movie/movie.component';
import { UrlImagePipe } from './pipes/url-image.pipe';
import { ResultsPipe } from './pipes/results.pipe';
import { CategoriaComponent } from './components/categoria/categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TarjetasComponent,
    MovieComponent,
    UrlImagePipe,
    ResultsPipe,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
