import { Component, OnInit } from '@angular/core';
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
export class TodosComponent implements OnInit {
  todos$:Observable<Itodo[]>
  constructor(private store:Store<{
    todo:InitialState
  }>) {
    this.todos$=this.store.select('todo').pipe(map(el=>el.todos))
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodosAction())
  }

}
