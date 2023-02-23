const User = require('../models/user')
const bcrypt = require('bcrypt')

const getAll = async () => {
  const data = await User.find()
  return data
}

const getById = async (id) => {
  const data = await User.findOne({ _id: id })
  return data
}

const create = async (data) => {
  const { name, email, password } = data
  const pass = await bcrypt.hash(password, 2)
  const user = new User({ name, email, password: pass })
  const newUser = await user.save()
  return newUser
}

const authenticate = async (email, password) => {
  const user = await User.findOne({ email: email })
  if (user) {
    return await bcrypt
      .compare(password, user.password)
      .then((res) => {
        return user
      })
      .catch((err) => {
        console.log('Usuario incorrecto...')
      })
  }
}

module.exports = { getAll, getById, create, authenticate }
