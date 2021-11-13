import { Component, OnInit } from '@angular/core';
import { CountriesServise } from './../../servises/countries.servise';
import { Observable } from 'rxjs';
import { ICountries } from './../../types/statistic';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries$!:Observable<{data:ICountries[]}>
  modalText:string=''
  constructor(private countriesServise:CountriesServise) { }

  ngOnInit(): void {
   this.countries$= this.countriesServise.getCountries()
  }
  changeModalText(s:any){
    this.modalText=s
  }

}
