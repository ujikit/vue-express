const employee = require('./models/employee')

module.exports = (app) => {
  app.get('/', employee.employee_list)
  app.post('/data', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}, your user was registered!`
    })
  })
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}, your user was registered!`
    })
  })
}
