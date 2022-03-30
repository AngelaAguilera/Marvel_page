import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() comic: Comic;

  constructor() { }

  ngOnInit(): void {
  }
}
