const UserService = require('../services/user')

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserService.authenticate(email, password)
    if (user) {
      req.session.userId = user._id
      res.redirect('/')
    } else {
      res.render('login', { error: 'Wrong email or password. Try again!' })
    }
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

const logout = async (req, res) => {
  req.session = null
  res.render('login')
}

module.exports = { login, logout }
