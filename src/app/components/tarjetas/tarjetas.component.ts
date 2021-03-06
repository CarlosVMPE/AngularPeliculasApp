import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() pag: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verDetalleMovie(id: number) {
    this.router.navigate(['/movie', id, this.pag]);
  }

}
