const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('../../database/db')
// Models
const User = require('./User')

process.env.SECRET_KEY = 'secret'

exports.login = function(req, res){
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
    } else {
      res.status(400).json({ error: 'User does not exist' })
    }
  }).catch(err => {
    res.status(400).json({ error: err })
  })
}
