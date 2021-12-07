require('dotenv').config()

module.exports = {
  jwtSecret: process.env.TOKEN_SECRET,
  jwtSession: {session: false}
}
