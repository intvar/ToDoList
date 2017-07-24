import {
  FETCH_TODOS_REQ, 
  FETCH_TODOS_FAIL, 
  FETCH_TODOS_SUCC,
  UPDATE_TODO_REQ,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_SUCC,
  DELETE_TODO_REQ,
  DELETE_TODO_FAIL,
  DELETE_TODO_SUCC,
  CREATE_TODO_REQ,
  CREATE_TODO_FAIL,
  CREATE_TODO_SUCC
} from '../actions/ToDo'

const initialState = {
  isFetching:false,
  list:[]
}

const reducers = (state = initialState, action) =>{
  switch(action.type){
  case DELETE_TODO_REQ:
  case UPDATE_TODO_REQ:
  case FETCH_TODOS_REQ:
  case CREATE_TODO_REQ:
    return {
      ...state,
      isFetching:true
    }
  case FETCH_TODOS_SUCC:
    return {
      isFetching:false,
      list:action.list
    }
  case UPDATE_TODO_SUCC:
    return {
      isFetching:false,
      list:state.list.map(todo=>{
        if (todo.id === action.id)
          return {...todo, ...action.data}
        return todo
      })
    }
  case DELETE_TODO_SUCC:
    return {
      isFetching:false,
      list:state.list.filter(todo=>todo.id !== action.id)
    }
  case CREATE_TODO_SUCC:
    return {
      isFetching:false,
      list:[...state.list, {id:action.id, ...action.data}]
    }
  case DELETE_TODO_FAIL:
  case UPDATE_TODO_FAIL:
  case FETCH_TODOS_FAIL:
  case CREATE_TODO_FAIL:
    return {
      ...state,
      isFetching:false,
      err:action.err
    }
  default:
    return state
  }
}

export default reducers