const app = require('./app'),
  port = require('./config').get('port')

app.listen(port, ()=>console.log(`Express server listening on port ${port}`))