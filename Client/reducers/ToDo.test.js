import {fetchTodosSucc, fetchTodosReq, fetchTodosFail,
  updateTodoReq, updateTodoFail, updateTodosSucc,
  deleteTodoReq, deleteTodoFail, deleteTodosSucc,
  createTodoReq, createTodoFail, createTodosSucc} from '../actions/ToDo'
import reducers from './ToDo.js'

const testList = [
  {id:1, text:'test_text' , checked:false},
  {id:2, text:'test_text2', checked:true},
  {id:3, text:'test_text3', checked:false}
]

describe('todos reducers', ()=>{
  it('fetch success reducer', ()=>{
    expect(reducers({isFetching:true, list:[]}, fetchTodosSucc(testList)))
      .toEqual({isFetching:false, list:testList})
  })

  it('fetch request reducer', ()=>{
    expect(reducers({isFetching:false, list:[]}, fetchTodosReq()))
      .toEqual({isFetching:true, list:[]})
  })

  it('fetch fail reducer', ()=>{
    expect(reducers({isFetching:true, list:[]}, fetchTodosFail('error text')))
      .toEqual({isFetching:false, list:[], err:'error text'})
  })

  it('update request reducer', ()=>{
    expect(reducers({isFetching:false, list:testList}, updateTodoReq()))
      .toEqual({isFetching:true, list:testList})
  })

  it('update success reducer', ()=>{
    expect(reducers({isFetching:true, list:testList}, updateTodosSucc(1,{checked:true})))
      .toEqual({isFetching:false, list:[
        {id:1, text:'test_text' , checked:true},
        {id:2, text:'test_text2', checked:true},
        {id:3, text:'test_text3', checked:false}
      ]})
  })

  it('update fail reducer', ()=>{
    expect(reducers({isFetching:true, list:testList}, updateTodoFail('error text')))
      .toEqual({isFetching:false, list:testList, err:'error text'})
  })

  it('delete request reducer', ()=>{
    expect(reducers({isFetching:false, list:testList}, deleteTodoReq()))
      .toEqual({isFetching:true, list:testList})
  })

  it('delete success reducer', ()=>{
    expect(reducers({isFetching:true, list:testList}, deleteTodosSucc(1)))
      .toEqual({isFetching:false, list:[
        {id:2, text:'test_text2', checked:true},
        {id:3, text:'test_text3', checked:false}
      ]})
  })

  it('delete fail reducer', ()=>{
    expect(reducers({isFetching:true, list:testList}, deleteTodoFail('error text')))
      .toEqual({isFetching:false, list:testList, err:'error text'})
  })

  it('create request reducer', ()=>{
    expect(reducers({isFetching:false, list:testList}, createTodoReq()))
      .toEqual({isFetching:true, list:testList})
  })

  it('create success reducer', ()=>{
    expect(reducers({isFetching:true, list:testList}, createTodosSucc(4, {text:'test_text4', checked:false})))
      .toEqual({isFetching:false, list:[...testList, {id:4, text:'test_text4', checked:false}]})
  })

  it('create fail reducer', ()=>{
    expect(reducers({isFetching:true, list:testList}, createTodoFail('error text')))
      .toEqual({isFetching:false, list:testList, err:'error text'})
  })
  
})


