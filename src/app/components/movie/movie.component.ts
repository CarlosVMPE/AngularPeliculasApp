import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;
  regresarA: string = "";

  constructor(private router: ActivatedRoute, private _ps: PeliculasService) {

    this.router.params.subscribe(params => {
      this.getMovie(params["id"]);
      this.regresarA = params["pag"];
    });
  }

  ngOnInit() {
  }

  async getMovie(id: number) {
    await this._ps.getMovie(id)
      .subscribe((data: Movie) => this.movie = data);
  }

}
