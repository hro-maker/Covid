
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountries } from '../types/statistic';

@Injectable()
export  class CountriesServise{
  constructor(private http:HttpClient){
  }
  getCountries(timeline=''):Observable<{data:ICountries[]}>{
      return this.http.get<{data:ICountries[]}>('https://corona-api.com/countries',{
        params:{
          include:timeline
        }
      })
  }
  getCountrie(code:string):Observable<{data:ICountries}>{
    return this.http.get<{data:ICountries}>(`https://corona-api.com/countries/${code}`,{

    })
}
}
