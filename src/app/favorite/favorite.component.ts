import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import  faRegular  from '@fortawesome/fontawesome-free-regular/';
import  faSolid  from '@fortawesome/fontawesome-free-solid/';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

  @Input()isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {
    fontawesome.library.add(faRegular);
    fontawesome.library.add(faSolid);
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}
