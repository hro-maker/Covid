import { Injectable } from "@angular/core";
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { map, switchMap } from "rxjs/operators";
import { StatisticServise } from './../servises/statistic.servise';
import { loadTodosAction, loadTodosSuccesAction } from './actions';
let page=0

@Injectable()
export class TodoEffect{
  constructor(
    private actions$:Actions,
    private servise:StatisticServise){
  }
  loadTodos$=createEffect(()=>{
      return this.actions$.pipe(
        ofType(loadTodosAction),
        switchMap((a)=>
             this.servise.loadTodos({page:a.page,limit:10}
          ).pipe(
          map(todos=>{
            console.log(todos)
            return loadTodosSuccesAction({todos})})
        )

        )
      )
  })
}
