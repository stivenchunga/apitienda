const  mongoose  = require('mongoose')
const Publicacion  = require('../modelo/Publicacion')

exports.getPublicacion = (req, res) =>{
    Publicacion.find({},(err, docs) => {
        res.send({
            docs: docs 
        })
    })
}

exports.postPublicacion = (req, res) =>{
    const data = req.body
    Publicacion.create( data, (err, docs) => {
        if (err) {
            res.send({ 
                status: 'error',
                code: 500,
                message: err
            })
        } else {
            res.send({ data: docs})
        }
    })
}

exports.searchPublicacion = (req, res) =>{
    const nameUser = req.params.nameUser
    console.log(nameUser);
    Publicacion.findOne( {nameUser}, (err, docs) => {
        if (err) {
            res.send({ 
                status: 'error',
                code: 500,
                message: err
            })
        } else {
            res.send({ data: docs})
            console.log(docs);
        }
    })
}

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
exports.putPublicacion = (req, res) =>{
    const {id} = req.params
    const body = req.body
    Publicacion.updateOne( 
        
        {_id: parseId(req.params.id)},
        body,
        (err, docs)=>{
            if (err) {
                res.send({ 
                    status: 'error',
                    code: 500,
                    message: err
                })
                console.log(err)
            } else {
               res.send({
                    items: docs
                }) 
            }
        }
    )
}

exports.deletePublicacion = (req, res) =>{
    const {id} = req.params
    Publicacion.deleteOne( 
        {_id: parseId(req.params.id)},
        (err, docs)=>{
            if (err) {
                res.send({ 
                    status: 'error',
                    code: 500,
                    message: err
                })
                console.log(err)
            } else {
               res.send({
                    items: docs
                })
            }
        }
    )
    
}
