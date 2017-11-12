const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3004
const result = require('./sentialgo')

app.use(bodyParser.urlencoded({ extended: true }))
app.post('/', (req, res) => {
  res.json(result(req.body.message))
})

app.listen(port, () => console.log(`server is running on port ${3004}!`))
