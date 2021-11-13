import { Component, Input, OnInit } from '@angular/core';
import { ICountries } from 'src/app/types/statistic';
import { CountriesServise } from './../../servises/countries.servise';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()code!:string
  countries:ICountries | null=null
  constructor(private countriesservise:CountriesServise ) { }

  ngOnInit(): void {
    this.countriesservise.getCountrie(this.code).subscribe(e=>{
          console.log(e)
    })
  }

}
