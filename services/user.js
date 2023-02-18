const User = require('../models/user')

const getAll = async () => {
  const data = await User.find()
  return data
}

const create = async (data) => {
  const user = new User(data)
  const newUser = await user.save()
  return newUser
}

module.exports = { getAll, create }
