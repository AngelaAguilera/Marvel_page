import { Funko } from 'src/app/models/funkos';
import { ActivatedRoute } from '@angular/router';
import { FunkosService } from './../../services/funkos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funko-detail',
  templateUrl: './funko-detail.component.html',
  styleUrls: ['./funko-detail.component.scss']
})
export class FunkoDetailComponent implements OnInit {

  funkoDetail?: Funko;

  constructor(
    private comicsService: FunkosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFunko();
  }

  public getFunko(): void{
    const id = 'id='+ Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.comicsService.getFunkos(id).subscribe(response => {
      this.funkoDetail = response[0];
    });
  }

}
