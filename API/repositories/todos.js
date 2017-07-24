const query = require('../lib/query')

exports.create = (todo)=>query('INSERT INTO todos SET ?', todo)
exports.retrieve = ()=>query('SELECT * FROM todos')
exports.update = (id, todo)=>query('UPDATE todos SET ? WHERE id = ?', [todo, id])
exports.deleteById = (id)=>query('DELETE FROM todos WHERE id = ?', id)
exports.deleteAll = ()=>query('DELETE FROM todos')