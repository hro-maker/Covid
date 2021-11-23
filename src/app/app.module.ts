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
import { TodosComponent } from './components/todos/todos.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './redux/reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './redux/effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
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
    StoreModule.forRoot({
      todo:todosReducer
    }),
    EffectsModule.forRoot([TodoEffect])
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
