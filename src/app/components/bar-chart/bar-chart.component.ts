import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ICountries } from 'src/app/types/statistic';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input()countrie!:ICountries | null
  options!: EChartsOption

  constructor() {

   }

  ngOnInit(): void {
    this.options = {
      xAxis: {
        type: 'category',
        data: this.countrie?.timeline
            .map((c) => new Date(c.date).toLocaleDateString())
            .reverse(),
      },
      legend: {

        data: ['Confirmed', 'Recovered', 'Deaths'],
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      series: [
        {
                name: 'Confirmed',
                  type: 'bar',
                  data: this.countrie?.timeline
                    .map((c) => {
                      return c.new_confirmed;
                    })
                    .reverse(),

                },
                {
                  name: 'Recovered',
                  type: 'bar',
                  data: this.countrie?.timeline.map((c) => c.new_recovered).reverse(),
                },
                {
                  name: 'Deaths',
                  type: 'bar',
                  data: this.countrie?.timeline.map((c) => c.new_deaths).reverse(),
                },
      ]
    };
  }

}
