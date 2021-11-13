import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatistic } from 'src/app/types/statistic';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  countryCasesChartOptions: any;
  cases: IStatistic[] = [];
  @Input()statistic!:Observable<{data:IStatistic[]}>
  constructor() {
   }

  ngOnInit(): void {
    this.statistic.subscribe(el=>{
      this.cases = el.data;
      this.countryCasesChartOptions = {
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
          data: this.cases
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
            data: this.cases
              .map((c) => {
                return c.confirmed;
              })
              .reverse(),

          },
          {
            name: 'Recovered',
            type: 'line',
            data: this.cases.map((c) => c.recovered).reverse(),
          },
          {
            name: 'Deaths',
            type: 'line',
            data: this.cases.map((c) => c.deaths).reverse(),
          },
        ],
      };
    })
  }

}
