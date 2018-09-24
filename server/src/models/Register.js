const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
// Models
const User = require('./User')

exports.register = function (req, res){
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) throw err
      userData.password = hash
      User.create(userData)
      .then(user => {
        res.json({ status: user.email + ' registered' })
      })
    })
    } else {
      res.json({ error: 'User already exists' })
    }
  })
}
