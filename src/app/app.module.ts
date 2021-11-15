import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticModule } from './pages/statistic/statistic.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterArr } from './pipes';
import { CountriesModule } from './pages/countries/countries.module';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import {MatSelectModule} from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from './app.i18n';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StatisticModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CountriesModule,
    TranslateModule.forRoot(translateModuleConfig),
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
