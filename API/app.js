const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
routes(app)

app.use((req, res, next, err)=>{
  console.log(err)
})

module.exports = app