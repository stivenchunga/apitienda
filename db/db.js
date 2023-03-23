const mongoose = require('mongoose')

const DB_URL = `mongodb://127.0.0.1/appTienda`

module.exports = ()=>{

    const connect = () => {
        mongoose.connect(DB_URL,{
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },(err) => {
            if (err) {
                console.log('DB: ERROR')
                console.log(err);
            } else {
                console.log('Conexion Exitosa')
            }
        })
    }
    connect();
}