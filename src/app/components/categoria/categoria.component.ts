import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  peliculas: Movie[] = null;
  pag: string = "";
  cargando: boolean;

  constructor(private router: ActivatedRoute, private _ps: PeliculasService) {
    this.pag = "home";
    this._ps.getMoviesInTheatres()
      .subscribe((data: Movie[]) => {
        this.cargando = true;
        this.peliculas = data;
        setTimeout(() => {
          this.cargando = false;
        }, 400);
      });

    this.router.params.subscribe(params => {
      this.showCategoria(params["cat"]);
    });
  }

  ngOnInit() {
  }

  showCategoria(categoria: string) {
    if (categoria === 'teatros') {
      this.pag = "categoria" + escape("/") + "teatros";
      this._ps.getMoviesInTheatres()
        .subscribe((data: Movie[]) => {
          this.cargando = true;
          this.peliculas = data;
          setTimeout(() => {
            this.cargando = false;
          }, 400);
        });
    } else if (categoria === 'populares') {
      this.pag = "categoria/populares";
      this._ps.getPopularMovies()
        .subscribe((data: Movie[]) => {
          this.cargando = true;
          this.peliculas = data;
          setTimeout(() => {
            this.cargando = false;
          }, 400);
        });
    } else if (categoria === 'kids') {
      this.pag = "categoria/kids";
      this._ps.getPopularKidsMovies()
        .subscribe((data: Movie[]) => {
          this.cargando = true;
          this.peliculas = data;
          setTimeout(() => {
            this.cargando = false;
          }, 400);
        });
    }
  }

}
