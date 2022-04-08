import { FunkosService } from './../../services/funkos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Funko } from './../../models/funkos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funkos',
  templateUrl: './funkos.component.html',
  styleUrls: ['./funkos.component.scss']
})
export class FunkosComponent implements OnInit {

  funkos: Funko[] = [];
  load: boolean = true;
  funkosForm: FormGroup;
  animate: boolean = false;

  constructor(
    private funkosService: FunkosService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.funkosForm = this.fb.group({
      name: [''],
      year: ['2022']
    });
    //this.getComics();
    this.getFunkosFilter();
  }

  public getFunkos(): void {
    this.funkosService.getFunkos().subscribe((result) => this.funkos = result);
  }

  public getFunkosFilter(): void {
    this.funkosService.getFunkosFilters(this.funkosForm.value.name, this.funkosForm.value.year).subscribe((result) => {
      this.funkos = result;
      this.load = false;
      this.animate = false;
    });
  }
}
