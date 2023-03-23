const  mongoose  = require('mongoose')
const model  = require('../modelo/usuario')

exports.getUsuario = (req, res) =>{
    model.find({},(err, docs) => {
        res.send({
            docs: docs
            
        })
    })
}

exports.postUsuario = (req, res) =>{
    const data = req.body
    console.log(data);
    model.create( data, (err, docs) => {
        if (err) {
            console.log(err);
            res.send({ 
                status: 'error',
                code: 404,
                message: err
            })
        } else {
            res.send({ 
                data: docs,
                code: 401,
            })
        }
    })
}

exports.searchUsuario = (req, res) =>{
    const nameUser = req.params.nameUser
    console.log(nameUser);
    model.findOne( {nameUser}, (err, docs) => {
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
exports.putUsuario = (req, res) =>{
    const {id} = req.params
    const body = req.body
    model.updateOne( 
        
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

exports.deleteUsuario = (req, res) =>{
    const {id} = req.params
    model.deleteOne( 
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
