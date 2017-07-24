const serverAddress = 'http://192.168.0.3:1337' 
export const FETCH_TODOS_REQ = 'FETCH_TODOS_REQ'
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL'
export const FETCH_TODOS_SUCC = 'FETCH_TODOS_SUCC'

export const fetchTodosReq = ()=>({
  type:FETCH_TODOS_REQ
})

export const fetchTodosFail = (err)=>({
  type:FETCH_TODOS_FAIL,
  err
})

export const fetchTodosSucc = (list)=>({
  type:FETCH_TODOS_SUCC,
  list
})

export const fetchToDos = ()=> async dispatch=>{
  try {
    dispatch(fetchTodosReq())
    const res = await fetch(serverAddress + '/api/v1/todos')
    const list = await res.json()
    dispatch(fetchTodosSucc(list))
  } catch(err){
    dispatch(fetchTodosFail(err.message))
  }
}



export const UPDATE_TODO_REQ = 'UPDATE_TODO_REQ'
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL'
export const UPDATE_TODO_SUCC = 'UPDATE_TODO_SUCC'


export const updateTodoReq = ()=>({
  type:UPDATE_TODO_REQ,
})

export const updateTodoFail = (err)=>({
  type:UPDATE_TODO_FAIL,
  err
})

export const updateTodosSucc = (id, data)=>({
  type:UPDATE_TODO_SUCC,
  id,
  data
})

export const updateTodo = (id, data)=> async dispatch=>{
  dispatch(updateTodoReq())
  try {
    await fetch(serverAddress + '/api/v1/todos/' + id, {
      method:'PUT',
      body:JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    dispatch(updateTodosSucc(id, data))
  } catch(err) {
    dispatch(updateTodoFail(err.message))
  }
}



export const DELETE_TODO_REQ = 'DELETE_TODO_REQ'
export const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL'
export const DELETE_TODO_SUCC = 'DELETE_TODO_SUCC'


export const deleteTodoReq = ()=>({
  type:DELETE_TODO_REQ,
})

export const deleteTodoFail = (err)=>({
  type:DELETE_TODO_FAIL,
  err
})

export const deleteTodosSucc = (id)=>({
  type:DELETE_TODO_SUCC,
  id
})

export const deleteTodo = (id)=> async dispatch=>{
  dispatch(deleteTodoReq())
  try {
    await fetch(serverAddress + '/api/v1/todos/' + id, {
      method:'DELETE'
    })
    dispatch(deleteTodosSucc(id))
  } catch(err) {
    dispatch(deleteTodoFail(err.message))
  }
}



export const CREATE_TODO_REQ = 'CREATE_TODO_REQ'
export const CREATE_TODO_FAIL = 'CREATE_TODO_FAIL'
export const CREATE_TODO_SUCC = 'CREATE_TODO_SUCC'

export const createTodoReq = ()=>({
  type:CREATE_TODO_REQ,
})

export const createTodoFail = (err)=>({
  type:CREATE_TODO_FAIL,
  err
})

export const createTodosSucc = (id, data)=>({
  type:CREATE_TODO_SUCC,
  id,
  data
})

export const createTodo = (data)=> async dispatch=>{
  dispatch(createTodoReq())
  try {
    const res = await fetch(serverAddress + '/api/v1/todos', {
      method:'POST',
      body:JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    const answer = await res.json()
    dispatch(createTodosSucc(answer.id, data))
  } catch(err) {
    dispatch(createTodoFail(err.message))
  }
}