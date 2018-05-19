import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post = {
    title : 'Angular App',
    isFavorite: true
  };

  constructor() { }

  ngOnInit() {
  }

  onFavoriteChanged(changedValue) {
    console.log('Changed Value:', changedValue);
  }

}
