import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  query: string = '';

  constructor(private pservice:PaisService) { }

  ngOnInit(): void {
  }


  search(){
    this.pservice.searchCountry(this.query)
    this.query = ''
  }


}
