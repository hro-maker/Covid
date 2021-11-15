import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatistic } from 'src/app/types/statistic';
import { filter, getTime } from './../../helpers';
import { CountriesServise } from './../../servises/countries.servise';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  countryCasesChartOptions: any;
  cases: IStatistic[] = [];
  @Input()isCountry?:boolean
  @Input()statistic!:Observable<{data:IStatistic[]}>
  constructor(private countrieServise:CountriesServise) {
   }
   setapOptions(arr:IStatistic[]){
     const result={
      title: {
        text: 'COVID-19 STATUS CHART',
      },
      legend: {

        data: ['Confirmed', 'Recovered', 'Deaths'],
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      xAxis: {
        data: arr
          .map((c) => new Date(c.date).toLocaleDateString())
          .reverse(),
          StyleSheetList:{
              color:"white"
          }
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Confirmed',
          type: 'line',
          data: arr
            .map((c) => {
              return c.confirmed;
            })
            .reverse(),

        },
        {
          name: 'Recovered',
          type: 'line',
          data: arr.map((c) => c.recovered).reverse(),
        },
        {
          name: 'Deaths',
          type: 'line',
          data: arr.map((c) => c.deaths).reverse(),
        },
      ],
    };
    return result
   }
  ngAfterViewInit() {
      if(this.isCountry){
        this.countrieServise.allLast$.subscribe(e=>{
           this.countryCasesChartOptions=this.setapOptions(filter(this.cases,e))
        })
      }

  }
  ngOnInit(): void {
    this.statistic.subscribe(el=>{
      this.cases = el.data;
      this.countryCasesChartOptions = this.setapOptions(this.cases)
    })
  }

}
