import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculas: Movie[] = [];
  showMovies: boolean = false;
  buscar: string = "";
  pag: string = "";
  cargando: boolean;

  constructor(private router: ActivatedRoute, private _ps: PeliculasService) {
    this.router.params.subscribe(params => {
      if (params['termino']) {
        this.buscar = params["termino"];
        this.searchMovie();
      }
    });
  }

  ngOnInit() {
  }

  searchMovie() {
    this.cargando = true;
    this.pag = "search/" + this.buscar;
    if (this.buscar.length > 0) {

      setTimeout(() => {
        this.cargando = false;
      }, 400);

      this._ps.searchMovie(this.buscar)
        .subscribe((data: Movie[]) => {
          this.peliculas = data;
          //console.log(data);
          this.showMovies = true;
        });
    }
  }

}
