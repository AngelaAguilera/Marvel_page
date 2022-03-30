import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;
  isLogged: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.logged();
  }

  logout(): void {
    localStorage.clear();
    this.logged();
  }

  private logged(): void {
    this.isLogged = localStorage.length > 0;
  }

  toggleClass() {
    this.toggle = !this.toggle;
    return this.toggle;
  }
}
