import { Artikel } from './artikel/artikel.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artikelList: Artikel[];

  constructor() {
    this.artikelList = [
      new Artikel('Angular 2', 'http://angular.io', 3),
      new Artikel('Fullstack', 'http://fullstack.io', 2),
      new Artikel('Angular Homepage', 'http://angular.io', 1),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.artikelList.push(new Artikel(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArtikelList(): Artikel[] {
    return this.artikelList.sort((a: Artikel, b: Artikel) => b.votes - a.votes);
  }
}
