import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { CountriesServise } from './../../servises/countries.servise';
import { CountriesListComponent } from 'src/app/components/countries-list/countries-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalComponent } from './../../components/modal/modal.component';
@NgModule({
  declarations: [
    CountriesComponent,
    CountriesListComponent,
    ModalComponent
  ],
  imports: [
MatPaginatorModule,
  CommonModule,
  MatTableModule
  ],
  providers:[
    CountriesServise
  ]
})
export class CountriesModule { }
