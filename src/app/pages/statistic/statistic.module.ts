import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { StatisticServise } from '../../servises/statistic.servise';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterArr, Sum } from 'src/app/pipes';
import {MatListModule} from '@angular/material/list';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartComponent } from '../../components/statisticChart/chart.component';
import { StatisticdataComponent } from '../../components/statisticdata/statisticdata.component';
@NgModule({
  declarations: [
    StatisticComponent,
    ChartComponent,
    StatisticdataComponent,
    //pipes
    FilterArr,Sum
  ],
  imports: [
CommonModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  NgxEchartsModule.forRoot({
    echarts
  })
  ],
  providers:[StatisticServise]
})
export class StatisticModule { }
