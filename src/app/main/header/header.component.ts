import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;
  isLogged: boolean = false;
  userName: string = '';

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
    this.logged();
    this.userName = localStorage.getItem("name")
  }

  logout(): void {
    localStorage.clear();
    this.logged();
    this.route.navigateByUrl('/main/home');
    this.userName = '';
  }

  private logged(): void {
    this.isLogged = localStorage.length > 0;
  }

  toggleClass() {
    this.toggle = !this.toggle;
    return this.toggle;
  }
}
