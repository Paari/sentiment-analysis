const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000
const result = require('./sentialgo')

app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.post('/', (req, res, next) => {
  res.send(result(req.body.message))
})

app.listen(port, () => console.log(`server is running on port ${port}!`))
