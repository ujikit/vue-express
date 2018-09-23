module.exports = {
  port: process.env.PORT || 8081,
  db: {
    host: process.env.HOST || 'localhost',
    database: process.env.DB_NAME || 'vue_express',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || ''
  }
}
