import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import {TodosComponent} from './components/todos/todos.component'
import { StatisticModule } from './pages/statistic/statistic.module';
const routes: Routes = [
  {path:"timelines",component:StatisticComponent},
  {path:'',component:CountriesComponent},
  {path:'todos',component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
