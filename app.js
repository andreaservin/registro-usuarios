const express = require('express')
const app = express()

const { getAll, create } = require('./controllers/user')

// views
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.urlencoded())

// routes
app.get('/', getAll)
app.get('/register', async (req, res) => res.render('register'))
app.post('/register', create)

app.listen(3000, () => console.log('Listening on port 3000!'))
