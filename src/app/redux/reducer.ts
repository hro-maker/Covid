import { createReducer, on, State } from "@ngrx/store";
import * as actions from './actions'
export interface Itodo{
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}
export interface InitialState{todos:Itodo[]}
export const initialState:InitialState = {
    todos:[]
};

export const todosReducer=createReducer(
  initialState,
  on(actions.addTodo,(state,action)=>({...state,todos:[...state.todos,action.todo]})),
  on(actions.loadTodosSuccesAction,(state,action)=>({...state,todos:[...state.todos,...action.todos]}))
)
