const mongoose = require('mongoose')

const usuarioScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        
        password:{
            type: String
        },
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('usuarioss', usuarioScheme)