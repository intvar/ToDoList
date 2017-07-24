const mysql = require('mysql'),
  config      = require('../config'),
  pool = mysql.createPool(config.get('mysqlParams'))

module.exports = (sql, props) => {
  return new Promise((resolve, reject)=>{
    pool.getConnection((err, connection)=>{
      if (err) return reject(err)
      connection.query(sql, props, (err, result)=>{
        if (!err) resolve(result)
        else reject(err)
      })
      connection.release()
    })
  })
}