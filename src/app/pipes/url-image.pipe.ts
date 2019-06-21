import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImage'
})
export class UrlImagePipe implements PipeTransform {
  private urlImg300: string = "http://image.tmdb.org/t/p/w300";

  transform(value: string): any {
    if (value === null) {
      return "assets/img/noimage.jpg"
    } else {
      return this.urlImg300 + value;
    }
  }

}
