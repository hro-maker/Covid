import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, Subject } from "rxjs";
import { IStatistic } from "../types/statistic";
import { Itodo } from 'src/app/redux/reducer';



@Injectable()
export class StatisticServise{
  statistic$=new Subject<IStatistic[]>()
  // ObservableStatic$=this.statistic$.asObservable
    constructor(private http:HttpClient){}
      getTimeLine():Observable<{data:IStatistic[]}>{
         return   this.http.get<{data:IStatistic[]}>('https://corona-api.com/timeline')
      }
      loadTodos():Observable<Itodo[]>{
          return this.http.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos')
      }

}
// .subscribe(el=>{
//   console.log('gettimeline ',el.data)
//   this.statistic$.next(el.data)
// })
