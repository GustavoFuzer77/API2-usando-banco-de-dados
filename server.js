const app = require('./index')
require('dotenv').config()

app.listen(process.env.LISTEN_PORT, () => {
    console.log('iniciado')
})