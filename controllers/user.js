const UserService = require('../services/user')

const getAll = async (req, res) => {
  try {
    const data = await UserService.getAll()
    res.render('index', { list: data })
  } catch (error) {
    res.render('index', { list: [] })
    res.status(500).json(error?.message).end()
  }
}

const create = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const data = UserService.create({ name, email, password })
    data && res.redirect('/')
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

module.exports = { getAll, create }
