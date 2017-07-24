const todosRepository = require('../repositories/todos'),
  dataForTests = require('../dataForTests'),
  request = require('supertest'),
  app = require('../app')

beforeEach(()=>Promise.all(dataForTests.todos.map(todo=>todosRepository.create(todo))))
afterEach(()=>todosRepository.deleteAll())

describe('todos api', ()=>{
  it('It should create todo and return 201 http status', ()=>{
    const todo = {text:'create new todo', checked:true}
    return request(app)
    .post('/api/v1/todos')
    .send(todo)
    .then(response=>{
      expect(response.statusCode).toBe(201)
      expect(Number.isInteger(response.body.id)).toBeTruthy()
    })
  })

  it('It should retrieve list todo and return 200 http status', ()=>{
    return request(app)
    .get('/api/v1/todos')
    .then(response=>{
      expect(response.statusCode).toBe(200)
      expect(Array.isArray(response.body)).toBeTruthy()
      expect(response.body.length).toBe(3)
    })
  })

  it('It should update todo and return 204 http status', ()=>{
    const todo = {text:'new text todo', checked:true}
    return request(app)
    .put('/api/v1/todos/1')
    .send(todo)
    .then(response=>{
      expect(response.statusCode).toBe(204)
    })
  })

  it('It should return 404 http status for update', ()=>{
    const todo = {text:'new text todo', checked:true}
    return request(app)
    .put('/api/v1/todos/99999')
    .send(todo)
    .then(response=>{
      expect(response.statusCode).toBe(404)
    })
  })

  it('It should delete todo and return 204 http status', ()=>{
    return request(app)
    .delete('/api/v1/todos/1')
    .then(response=>{
      expect(response.statusCode).toBe(204)
    })
  })

  it('It should return 404 http status for delete', ()=>{
    const todo = {text:'new text todo', checked:true}
    return request(app)
    .delete('/api/v1/todos/99999')
    .send(todo)
    .then(response=>{
      expect(response.statusCode).toBe(404)
    })
  })

})