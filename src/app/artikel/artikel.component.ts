import { Artikel } from './artikel.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css'],
  host: { class: 'row' }
})

export class ArtikelComponent implements OnInit {
  @Input() artikel: Artikel;

  voteUp(): boolean {
    this.artikel.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.artikel.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
