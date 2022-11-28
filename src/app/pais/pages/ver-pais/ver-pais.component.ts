import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  query : string = '';

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

  search(){
    this.pservice.searchCountry(this.query)
    this.query = ''
  }

}
