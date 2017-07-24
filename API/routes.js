const ToDo = require('./controllers/todos')
module.exports = app=>{
  app.post('/api/v1/todos', ToDo.create)
  app.get('/api/v1/todos', ToDo.retrieve)
  app.put('/api/v1/todos/:id', ToDo.update)
  app.delete('/api/v1/todos/:id', ToDo.delete)
}