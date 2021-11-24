import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitialState, Itodo } from 'src/app/redux/reducer';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { loadTodosAction } from './../../redux/actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements AfterViewInit {
  page= -1
  @ViewChild('load',{static:true})load!:ElementRef
  todos$:Observable<Itodo[]>
  constructor(private store:Store<{
    todo:InitialState
  }>) {
    this.todos$=this.store.select('todo').pipe(map(el=>el.todos))
  }
  ngAfterViewInit(): void {
    let observer = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
        this.page++
        console.log(this.page)
        this.store.dispatch(loadTodosAction({page:this.page}))
      }
      // this.store.dispatch(loadTodosAction())
    });
    observer.observe(this.load.nativeElement)
  }


}
