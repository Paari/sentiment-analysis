const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3004

app.use(bodyParser.urlencoded({ extended: true }))
app.post('/', (req, res) => {
  console.log(`this is working ${JSON.stringify(req.body)}`)
  res.json(req.body)
})

app.listen(port, () => console.log(`server is running on port ${3004}!`))
