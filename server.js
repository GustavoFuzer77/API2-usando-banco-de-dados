const app = require('./app');
require('dotenv').config()

app.listen(process.env.LISTEN_PORT, () => {
    console.log('inciado')
}) 