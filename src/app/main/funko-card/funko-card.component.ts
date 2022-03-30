import { Component, OnInit, Input } from '@angular/core';
import { Funko } from 'src/app/models/funkos';
@Component({
  selector: 'app-funko-card',
  templateUrl: './funko-card.component.html',
  styleUrls: ['./funko-card.component.scss']
})
export class FunkoCardComponent implements OnInit {
  @Input() funko:Funko;

  constructor() { }

  ngOnInit(): void {
  }

}
