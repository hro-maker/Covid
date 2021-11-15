import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { filter, setapCountryOptions } from 'src/app/helpers';
import { ICountries, IStatistic } from 'src/app/types/statistic';
import { CountriesServise } from './../../servises/countries.servise';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit {
  @Input()countrie!:ICountries | null
  options!: EChartsOption

  constructor(private countryServise:CountriesServise) {
   }
  ngAfterViewInit(): void {
    this.countryServise.newLast$.subscribe(e=>{
          this.options=setapCountryOptions(filter(this.countrie?.timeline as IStatistic[],e))
    })
  }

  ngOnInit(): void {
    this.options = setapCountryOptions(this.countrie?.timeline as IStatistic[])
  }

}
