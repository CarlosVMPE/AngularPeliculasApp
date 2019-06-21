import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'results'
})
export class ResultsPipe implements PipeTransform {
  nuevoArreglo: any[] = [];

  transform(value: any, cant: number): any {

    for (let i = 0; i < cant; i++) {
      this.nuevoArreglo[i] = value[i];
    }
    return this.nuevoArreglo;
  }

}
