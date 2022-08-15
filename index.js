const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
});

app.get('/user/:id', (req, res) => {
  const p = req.params
  console.log(q.id)

  const q = req.query
  console.log(q) 

  res.json ({'userid': q.name})
});

app.get('/dog', (req, res) => {
  res.send("dog")
});

app.get('/sound/:name', (req, res) => {
  const { name } = req.params
  
  if(name == "dog") {
    res.json({'sound': 'ajd'})
  } else if (name == "cat") {
    res.json({'sound': 'yaa'})
  } else if (name == "pig") {
    res.json({'sound': 'quag'})
  } else {
    res.json({'sound': 'not think'})
  }

});

app.listen(8000)