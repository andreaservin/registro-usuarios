const express = require('express')
const app = express()
const cookieSession = require('cookie-session')

const { getAll, create } = require('./controllers/user')
const { requireUser } = require('./middlewares/auth')
const { login, logout } = require('./controllers/auth')

// views
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.urlencoded())
app.use(
  cookieSession({
    name: 'userId',
    secret: 'wsvbq',
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)

// routes
app.get('/', requireUser, getAll)
app.get('/register', async (req, res) => res.render('register'))
app.post('/register', create)
app.get('/login', async (req, res) => res.render('login'))
app.post('/login', login)
app.get('/logout', logout)

app.listen(3000, () => console.log('Listening on port 3000!'))
