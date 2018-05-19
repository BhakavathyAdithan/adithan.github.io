import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  courses = [1, 2];
  viewMode = 'map';
  subjects = [
    {id: 1, name: 'Physics'},
    {id: 2, name: 'Geography'},
    {id: 3, name: 'History'}
  ];

  user = {
    name: 'Bhakavathy Adithan',
    address: null
  };
  color = true;
  bgColor = true;

  journals;

  constructor() { }


    loadJournals() {
      this.journals = [
        {id: 1, name: 'The Hindu'},
        {id: 2, name: 'TOI'},
        {id: 3, name: 'Indian Express'}
      ];
    }

    changeMe() {
      this.color = !this.color;
    }

    styleMe() {
      this.bgColor = !this.bgColor;
    }

    trackJournal(index, journal) {
      return journal ? journal.id : undefined;
    }

    onAdd() {
      this.subjects.push({id: 4, name: 'Maths'});
    }

    onRemove(subject) {
      const index = this.subjects.indexOf(subject);
      this.subjects.splice(index, 1);
    }


  ngOnInit() {
  }

}
