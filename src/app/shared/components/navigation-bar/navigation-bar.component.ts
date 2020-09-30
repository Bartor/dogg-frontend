import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from 'src/app/config/routes';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  routes = APP_ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
