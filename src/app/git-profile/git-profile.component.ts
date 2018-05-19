import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      console.log(id);
    });
  }

  submit() {
      this.router.navigate(['/followers'], {
        queryParams: {page: 1, sortBy: 'Newest'}
      });
    }

}
