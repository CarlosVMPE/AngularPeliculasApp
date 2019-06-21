import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/operators'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "908cbd72ae16dcc7cbad7053716e7785";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map((res: any) => res.results));
  }

  searchMovie(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map((res: any) => res.results));

  }

  getMoviesInTheatres() {
    // Cartelera de la semana
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;
    let url =
      `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map((res: any) => res.results));
  }

  getPopularKidsMovies() {
    let url =
      `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map((res: any) => {
      console.log(res);
      return res.results;
    }));
  }

  getMovie(id: number) {
    let url =
      `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map((res: any) => res));
  }


}
