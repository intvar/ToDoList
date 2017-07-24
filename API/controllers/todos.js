const repository = require('../repositories/todos')

//ToDo Добавить валидацию входных данных

exports.create = (req, res, next) => {
  const {text, checked} = req.body
  repository.create({text, checked})
  .then(result=>res.status(201).send({id:result.insertId}))
  .catch(next)

}

exports.retrieve = (req, res, next) => {
  repository.retrieve()
  .then(todos=>{
    res.status(200).send(todos.map(todo=>{
      todo.checked = !!todo.checked
      return todo
    }))
  })
  .catch(next)
}

exports.update = (req, res, next) => {
  const {text, checked} = req.body,
    id = req.params.id,
    updateData = {}

  if (text)
    updateData.text = text

  if (checked !== undefined)
    updateData.checked = checked

  repository.update(id, updateData)
  .then(result=>{
    if (result.affectedRows)
      return res.status(204).send()
    res.status(404).send()
  })
  .catch(next)
}

exports.delete = (req, res, next) => {
  const id = req.params.id

  repository.deleteById(id)
  .then(result=>{
    if (result.affectedRows)
      return res.status(204).send()
    res.status(404).send()
  })
  .catch(next)
}