const UserService = require('../services/user')

const requireUser = async (req, res, next) => {
  const userId = req.session?.userId
  if (userId) {
    const user = await UserService.getById(userId)
    res.locals.user = user
    next()
  } else {
    return res.redirect('/login')
  }
}

module.exports = { requireUser }
