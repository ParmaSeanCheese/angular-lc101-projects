import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    'https://5e.tools/',
    'https://www.heroforge.com/'
  ]
  constructor() { }

  ngOnInit() {
  }

}
