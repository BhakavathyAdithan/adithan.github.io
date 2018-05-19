import { environment } from './../../environments/environment';
import { OrderService } from './../services/order.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarColor = environment.navColor;
  textColor = environment.textcolor;

  constructor(private orderService: OrderService, public authService: AuthService) { }

  ngOnInit() {
  }

}
