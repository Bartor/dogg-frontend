import { TOP_NAVIGATION } from './../../../config/navigation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  routes = TOP_NAVIGATION;

  constructor() {}

  ngOnInit(): void {}
}
