import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Pais} from '../interfaces/searchResponse.interface'

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private url: string = 'https://restcountries.com/v3.1/name/';
    result: Pais[] = [];
    
    constructor(private http:HttpClient){

    }

    searchCountry(query:string){
        this.http.get<Pais[]>(this.url+query)
        .subscribe((resp)=> this.result = resp)
    }


}