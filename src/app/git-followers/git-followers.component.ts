import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.css']
})
export class GitFollowersComponent implements OnInit {

  followers = [
    {
      id: 1,
      name: 'Bhakavathy Adithan'
    },
    {
      id: 2,
      name: 'Adithan'
    },
    {
      id: 3,
      name: 'Shiva'
    },
    {
      id: 4,
      name: 'Murugan'
    },
    {
      id: 5,
      name: 'Bucks'
    },
    {
      id: 6,
      name: 'Ramachandra'
    },
    {
      id: 7,
      name: 'Vadivel'
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      console.log(combined[0]);
      console.log(combined[1]);
    });

    this.route.paramMap.subscribe(
      routeParams => {
        console.log(routeParams);
      }
    );

    this.route.queryParamMap.subscribe(
      queryParams => {
        console.log(queryParams);
      }
    );

  }

}
