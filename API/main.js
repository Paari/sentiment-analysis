const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({text: 'sample api'}))

app.listen(3004, () => console.log('server is running on port 3004!'))
