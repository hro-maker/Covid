import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ICountries } from './../../types/statistic';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  @Input()countries$!:Observable<{data:ICountries[]}>
  @Output()changemodaltext:EventEmitter<string>=new EventEmitter()
  countries:ICountries[]=[]
  allCountries:ICountries[]=[]
  pageIndex=0
  displayedColumns: string[] = ['position','name', 'code',];
  dataSource = this.countries

  constructor() { }
  ngOnInit(): void {
    this.countries$.subscribe(e=>{
      this.allCountries=e.data
      this.countries=this.allCountries.slice(0,12)
    })
  }
  onPageChange(e:PageEvent){
        this.countries=this.allCountries.slice(e.pageIndex*12,e.pageIndex*12+12)
  }
  changModalText(s:string){
    console.log(s)
      this.changemodaltext.emit(s)
  }
}
