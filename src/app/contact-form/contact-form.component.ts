import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  gadgets = [
    {id: 1, name: 'Phone'},
    {id: 2, name: 'Tablet'},
    {id: 3, name: 'Fir Stick'}
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
