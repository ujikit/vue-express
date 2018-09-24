// models
const Login = require('./models/Login')
const Register = require('./models/Register')

module.exports = (app) => {
  app.post('/data', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}, your user was registered!`
    })
  })
  app.post('/register', Register.register)
  app.post('/login', Login.login)
}
