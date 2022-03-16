import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(){
    this.toggle = !this.toggle;
    return this.toggle;
  }
}
