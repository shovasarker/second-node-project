const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('My second node app')
})

const users = [
  { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
  { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com', phone: '01788888888' },
  {
    id: 3,
    name: 'Suchorita',
    email: 'suchorita@gmail.com',
    phone: '01788888888',
  },
  {
    id: 4,
    name: 'Suchonda',
    email: 'suchonda@gmail.com',
    phone: '01788888888',
  },
  {
    id: 5,
    name: 'Srabonti',
    email: 'srabonti@gmail.com',
    phone: '01788888888',
  },
  { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
  { id: 7, name: 'Sohana', email: 'sohona@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
  //filter by search query
  if (req.query.name) {
    const search = req.query.name
    const matched = users?.filter((user) =>
      user.name.toLowerCase().includes(search)
    )
    res.send(matched)
  } else {
    res.send(users)
  }
})

app.get('/user/:id', (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user?.id === parseInt(id))
  res.send(user ? user : { status: 200, result: 'User not Found' })
})

app.post('/user', (req, res) => {
  console.log('Request ', req.body)
  const user = { ...req.body, id: users?.length + 1 }
  users.push(user)
  res.send(user)
})

app.get('/fruits', (req, res) => {
  res.send(['Mango, Orange, Apple, Pineapple'])
})
app.get('/fruits/mango/fazle', (req, res) => {
  res.send('Sour Sour Fazle')
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
