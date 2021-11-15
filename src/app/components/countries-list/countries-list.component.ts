import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { fromEvent, Observable } from 'rxjs';
import { ICountries } from './../../types/statistic';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements AfterViewInit {
  @Input()countries$!:Observable<{data:ICountries[]}>
  @Output()changemodaltext:EventEmitter<string>=new EventEmitter()
  form=new FormGroup({
    searchText:new FormControl('')
  })
  get searchText(){
    return this.form.get('searchText')
  }
  countries:ICountries[]=[]
  allCountries:ICountries[]=[]
  proxyCountryArr:ICountries[]=[]
  pageIndex=0
  displayedColumns: string[] = ['position','name', 'code',];
  dataSource = this.countries

  constructor() { }
  ngAfterViewInit(): void {
    this.searchText?.valueChanges.subscribe(value=>{
          this.pageIndex=0
      this.proxyCountryArr=this.allCountries.filter(e=>e.name.toLowerCase().includes(value.toLowerCase()))
      this.countries=this.proxyCountryArr.slice(0,12)
    })
  }
  ngOnInit(): void {
    this.countries$.subscribe(e=>{
      this.allCountries=e.data
      this.proxyCountryArr=e.data
      this.countries=this.allCountries.slice(0,12)
    })
  }
  onPageChange(e:PageEvent){
        this.countries=this.proxyCountryArr.slice(e.pageIndex*12,e.pageIndex*12+12)
  }

  changModalText(s:string){
      this.changemodaltext.emit(s)
  }
}
