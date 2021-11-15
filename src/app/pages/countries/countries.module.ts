import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { CountriesServise } from './../../servises/countries.servise';
import { CountriesListComponent } from 'src/app/components/countries-list/countries-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalComponent } from './../../components/modal/modal.component';
import { MatCardModule } from '@angular/material/card';
import { StatisticModule } from '../statistic/statistic.module';
import { BarChartComponent } from 'src/app/components/bar-chart/bar-chart.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    CountriesComponent,
    CountriesListComponent,
    ModalComponent,
    BarChartComponent,
  ],
  imports: [

  TranslateModule,
    MatPaginatorModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    StatisticModule,
    MatSlideToggleModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    ReactiveFormsModule
  ],
  providers: [CountriesServise],
})
export class CountriesModule {}
