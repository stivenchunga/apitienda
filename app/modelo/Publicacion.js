const mongoose = require('mongoose')

const publicacionScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        title: {
            type: String,
        },
        description: {
            type: String
        },
        img:{
            type: String
        }
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Publicacion', publicacionScheme)