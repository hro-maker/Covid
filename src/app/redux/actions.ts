import { createAction, props } from "@ngrx/store";
import { Itodo } from './reducer';

export const loadTodosAction=createAction('load todos')
export const loadTodosSuccesAction=createAction('load todos succes',props<{todos:Itodo[]}>())
export const addTodo=createAction('create String',props<{todo:Itodo}>())
